import { nextAuthOptions } from '@/lib/next-auth.lib';
import nextAuth from 'next-auth';

const handler = nextAuth(nextAuthOptions);
export { handler as GET, handler as POST };
