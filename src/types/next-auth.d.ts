import { DefaultSession } from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a parameter in
   * `Session` callbacks.
   */
  interface Session {
    user: {
      /** The user's unique ID. */
      id: string
    } & DefaultSession["user"]
  }
}
