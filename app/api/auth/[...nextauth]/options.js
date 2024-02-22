import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

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
        GoogleProvider({
            profile(profile) {

                let userRole = "Google User";
                if (profile?.email === "kk.rochelle@gmail.com") {
                    userRole = "admin";
                }

                return {
                    ...profile,
                    id: profile.sub,
                    role: userRole,
                    image: profile.picture,
                };
            },
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ],
    theme: {
        colorScheme: "light", // "auto" | "dark" | "light"
        brandColor: "#f0e2e8", // Hex color code
        logo: "https://cookscabinet.vercel.app/chef-hat-2.png", // Absolute URL to image
        buttonText: "000000" // Hex color code
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