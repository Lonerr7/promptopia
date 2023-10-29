import GoogleProvider from 'next-auth/providers/google';
import { connectToDB } from '@/utils/connectToDB';
import User from '@/models/User';
import { AuthOptions } from 'next-auth';

export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session }: { session: any }) {
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

            // @ts-ignore
            image: profile?.picture,
          });
        }

        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
};
