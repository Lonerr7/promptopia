import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

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
  async session({ session }: { session: any }) {},

  async signIn({ profile }: { profile: any }) {},
});

export { handlder as GET, handlder as POST };
