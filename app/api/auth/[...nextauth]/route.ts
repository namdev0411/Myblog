import { envProvider } from "@/utils/envProvider";
import NextAuth, { Account, AuthOptions, Profile, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
const { GOOGLE_CLIENT_ID, GOOGLE_SECRET } = envProvider;

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
  secret: process.env.AUTH_SECRET,

  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("user:>>> ", user.email);
      console.log("account:>>> ", account);
      console.log("profile:>>> ", profile);
      if (account?.provider === "google") {
        //check the user on your database and return true if is allowed to signIn
        const isAllowedToSignIn = true;

        if (isAllowedToSignIn) {
          return true;
        } else {
          return false;
        }
      }
      return false;
    },
    //   async jwt(token: JWT) {
    //     return token;
    //   },
    //   async session({ session, token }: { session: Session; token: JWT }) {
    //     console.log("session>>> ", session);
    //     // console.log("token>>>> ", token.token.token);
    //     // Đưa thông tin người dùng vào session
    //     // session.user!.name = token.name;
    //     // session.user!.email = token.email;
    //     return session;
    //   },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
