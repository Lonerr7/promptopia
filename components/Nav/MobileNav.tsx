import { Dispatch, SetStateAction, FC } from 'react';
import NavSignIn from './NavSignIn';
import Image from 'next/image';
import { signOut, LiteralUnion, ClientSafeProvider } from 'next-auth/react';
import { BuiltInProviderType } from 'next-auth/providers/index';
import Link from 'next/link';

import logo from '@/public/assets/images/logo.svg';

interface Props {
  isUserLoggedId: boolean;
  toggleDropdown: boolean;
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
  setToggleDropdown: Dispatch<SetStateAction<boolean>>;
}

const MobileNav: FC<Props> = ({
  isUserLoggedId,
  toggleDropdown,
  providers,
  setToggleDropdown,
}) => {
  return (
    <div className="sm:hidden flex relative">
      {isUserLoggedId ? (
        <div className="flex">
          <Image
            className="rounded-full"
            src={logo}
            alt="profile"
            width={37}
            height={37}
            onClick={() => {
              setToggleDropdown((prev) => !prev);
            }}
          />

          {toggleDropdown && (
            <div className="dropdown">
              <Link
                className="dropdown_link"
                href="/profile"
                onClick={() => {
                  setToggleDropdown(false);
                }}
              >
                My Profile
              </Link>
              <Link
                className="dropdown_link"
                href="/create-prompt"
                onClick={() => {
                  setToggleDropdown(false);
                }}
              >
                Create Prompt
              </Link>
              <button
                className="mt-5 w-full black_btn"
                type="button"
                onClick={() => {
                  setToggleDropdown(false);
                  signOut();
                }}
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      ) : (
        <NavSignIn providers={providers} />
      )}
    </div>
  );
};

export default MobileNav;
