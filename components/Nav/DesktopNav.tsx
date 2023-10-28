import Image from 'next/image';
import Link from 'next/link';
import NavSignIn from './NavSignIn';
import { BuiltInProviderType } from 'next-auth/providers/index';
import { LiteralUnion, ClientSafeProvider } from 'next-auth/react';
import { SessionUser } from '@/types/authTypes';

import logo from '@/public/assets/images/logo.svg';
import AuthenticatedNav from './AuthenticatedNav';

interface Props {
  user: SessionUser;
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
}

const DesktopNav: React.FC<Props> = ({ user, providers }) => {
  return (
    <div className="sm:flex hidden">
      {user ? (
        <div className="flex gap-3 md:gap-5">
          <AuthenticatedNav />
          <Link href="/profile">
            <Image
              className="rounded-full"
              src={user?.image ? user.image : logo}
              alt="profile"
              width={37}
              height={37}
            />
          </Link>
        </div>
      ) : (
        <NavSignIn providers={providers} />
      )}
    </div>
  );
};

export default DesktopNav;
