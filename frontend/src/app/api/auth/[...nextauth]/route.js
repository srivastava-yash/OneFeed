import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
    providers : [
        GoogleProvider({
            clientId: process.env.GOOGLE_AUTH_ID,
            clientSecret: process.env.GOOGLE_AUTH_SECRET
        })
    ],
    callbacks: {
        async session({ session }) {
            return session;
        },

        async signIn({ profile }) {
            console.log(profile);
            // can get profile.email profile.picture profile.name
            return true;
        },


    }

})

export { handler as GET, handler as POST };
