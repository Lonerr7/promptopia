'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {
  signIn,
  signOut,
  useSession,
  getProviders,
  LiteralUnion,
  ClientSafeProvider,
} from 'next-auth/react';
import logo from '@/public/assets/images/logo.svg';
import { BuiltInProviderType } from 'next-auth/providers/index';
import NavSignIn from './NavSignIn';

const Nav = () => {
  const isUserLoggedId = true;

  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setAuthProviders = async () => {
      const response = await getProviders();

      console.log(response);

      setProviders(response);
    };

    isUserLoggedId || setAuthProviders(); //! Запрашиваем провайдеры только когда мы не вошли на страницу
  }, []);

  return (
    <nav className="pt-3 flex-between w-full">
      <Link className="gap-2 flex-center" href="/">
        <Image
          className="object-contain"
          src={logo}
          alt="logo"
          width={30}
          height={30}
        />
        <p className="logo_text">Promptopia</p>
      </Link>

      {/* Desktop Nav */}
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

      {/* Mobile Navigation */}
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
    </nav>
  );
};

export default Nav;
