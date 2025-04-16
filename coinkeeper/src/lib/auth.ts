import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as any,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.error("Invalid credentials provided");
          throw new Error("Invalid credentials");
        }

        try {
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email
            }
          });

          if (!user) {
            console.error("User not found:", credentials.email);
            throw new Error("User not found");
          }

          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!isPasswordValid) {
            console.error("Invalid password for user:", credentials.email);
            throw new Error("Invalid password");
          }

          console.log("User authenticated successfully:", user.email);
          return {
            id: user.id.toString(),
            email: user.email,
            username: user.username
          };
        } catch (error) {
          console.error("Authorization error:", error);
          throw new Error("Authentication failed");
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  debug: process.env.NODE_ENV === "development",
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        console.log("JWT callback with user:", user.email);
        token.id = user.id;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        console.log("Session callback with token for user ID:", token.id);
        session.user.id = token.id;
        session.user.username = token.username;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      console.log("Redirect callback, url:", url, "baseUrl:", baseUrl);
      // If the URL starts with the base URL, it's a relative URL
      if (url.startsWith(baseUrl)) return url;
      // Otherwise, make sure we only redirect to relative URLs or our own domain
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      return baseUrl;
    }
  },
}; 