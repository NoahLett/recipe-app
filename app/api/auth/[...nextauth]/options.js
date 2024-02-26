import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import bcrypt from 'bcrypt';

export const options = {
    providers: [
        GithubProvider({
            profile(profile) {

                let userRole = "Github User";
                if(profile?.email === "noahblett96@gmail.com") {
                    userRole = "admin";
                }
                return {
                    ...profile,
                    id: profile.id.toString(),
                    role: userRole,
                    image: profile.avatar_url,
                };
            },
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {
                    label: 'Username',
                    type: 'text',
                    placeholder: 'your-username',
                },
                password: {
                    label: 'Password',
                    type: 'password',
                    placeholder: 'your-password',
                },
            },
            async authorize(credentials) {
                try {
                    const foundUser = await prisma.user.findUnique({
                        where: { username: credentials.username }
                    })

                    if (foundUser) {
                        const match = await bcrypt.compare(credentials.password, foundUser.password);

                        if (match) {
                            delete foundUser.password;

                            foundUser["role"] = "Creds User";

                            if (foundUser.username === 'KaitlynWetzel') {
                                foundUser.role = 'admin';
                            }

                            return foundUser;
                        }
                    }
                } catch (error) {
                    console.log(error);
                }
                return null;
            }
        }),
    ],
    theme: {
        colorScheme: "light", 
        brandColor: "#dfc0cd", 
        logo: "https://cookscabinet.vercel.app/chef-hat-2.png", 
        buttonText: "#000000"
      },
    callbacks: {
        async jwt({token, user, profile}) {
            if (user) { 
                token.role = user.role;
                token.id = user.id;
            }
            return token;
        },
        async session({session, token, user}) {
            if (session?.user) { 
                session.user.role = token.role;
                session.user.id = token.id;
            }
            return session;
        }
    }
};