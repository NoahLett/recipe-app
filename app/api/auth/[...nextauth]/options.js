import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const options = {
    providers: [
        GithubProvider({
            profile(profile) {
                console.log("Github profile:", profile);

                let userRole = "Github User";
                if(profile?.email === "noahblett96@gmail.com") {
                    userRole = "admin"
                }
                return {
                    ...profile,
                    role: userRole,
                    image: profile.avatar_url,
                };
            },
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            profile(profile) {
                console.log("Google profile:", profile);

                let userRole = "Google User";

                return {
                    ...profile,
                    id: profile.sub,
                    role: userRole,
                    image: profile.picture
                };
            },
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ],
    callbacks: {
        async jwt({token, user}) {
            if (user) token.role = user.role
            return token;
        },
        async session({session, token}) {
            if (session?.user) session.user.role = token.role
            return session;
        }
    }
};