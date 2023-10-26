'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {
  signIn,
  useSession,
  getProviders,
  LiteralUnion,
  ClientSafeProvider,
} from 'next-auth/react';
import logo from '@/public/assets/images/logo.svg';
import { BuiltInProviderType } from 'next-auth/providers/index';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Nav = () => {
  const { data: session } = useSession();

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

    session?.user || setAuthProviders(); //! Запрашиваем провайдеры только когда мы не вошли на страницу
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

      <DesktopNav user={session?.user} providers={providers} />

      <MobileNav
        user={session?.user}
        toggleDropdown={toggleDropdown}
        providers={providers}
        setToggleDropdown={setToggleDropdown}
      />
    </nav>
  );
};

export default Nav;
