import Image from 'next/image';
import Link from 'next/link';
import NavSignIn from './NavSignIn';
import { BuiltInProviderType } from 'next-auth/providers/index';
import { LiteralUnion, ClientSafeProvider } from 'next-auth/react';

import logo from '@/public/assets/images/logo.svg';

interface Props {
  isUserLoggedId: boolean;
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
}

const DesktopNav: React.FC<Props> = ({ isUserLoggedId, providers }) => {
  return (
    <div className="sm:flex hidden">
      {isUserLoggedId ? (
        <div className="flex gap-3 md:gap-5">
          <Link className="black_btn" href="/create-prompt">
            Create Post
          </Link>
          <button className="outline_btn" type="button">
            Sign Out
          </button>
          <Link href="/profile">
            <Image
              className="rounded-full"
              src={logo}
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
