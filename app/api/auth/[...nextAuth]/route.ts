import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import { connectToDB } from '@/utils/connectToDB';
import User from '@/models/User';
import { JWT } from 'next-auth/jwt';
import { AdapterUser } from 'next-auth/adapters';

// Остановился на 1:24:32

console.log({
  clientId: process.env.GOOGLE_CLIENT_ID!,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
});

const handlder = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({
      session,
      token,
      user,
    }: {
      session: any;
      token: JWT;
      user: AdapterUser;
    }) {
      const sessionUser = await User.findOne({
        email: session.user?.email,
      });

      session.user.id = sessionUser._id.toString();

      return session;
    },

    async signIn({ profile }) {
      try {
        await connectToDB();
        // 1. Check if the user already exists
        const user = await User.findOne({ email: profile?.email });

        // 2. If user doesn't exist, create it
        if (!user) {
          await User.create({
            email: profile?.email,
            username: profile?.name?.replace(' ', '').toLowerCase(),
            image: profile?.image,
          });
        }

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});

export { handlder as GET, handlder as POST };
