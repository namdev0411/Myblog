import NextAuth from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      address: string;
    };
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends DefaultJWT {
    /** OpenID ID Token */
    idToken?: string;
    // token?: GoogleTokenJWT;
  }
}

type GoogleTokenJWT = {
  token: {
    user: {
      id: string;
      name: string;
      email: string;
      image: string;
    };
    account: {
      provider: string;
      type: string;
      access_token: string;
      expires_at: Date;
      token_type: string;
      id_token: string;
    };
  };
};
