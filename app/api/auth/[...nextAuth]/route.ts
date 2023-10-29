import NextAuth from 'next-auth';

import { authConfig } from '@/configs/auth';

const handlder = NextAuth(authConfig);

export { handlder as GET, handlder as POST };
