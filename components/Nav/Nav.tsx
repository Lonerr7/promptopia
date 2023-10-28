'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {
  useSession,
  getProviders,
  LiteralUnion,
  ClientSafeProvider,
} from 'next-auth/react';
import logo from '@/public/assets/images/logo.svg';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { useAuthStore } from '@/store/authStore';

const Nav: React.FC = () => {
  const { data: session } = useSession();
  const { providers, setAuthProviders } = useAuthStore((state) => ({
    providers: state.providers,
    setAuthProviders: state.setAuthProviders,
  }));

  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    session?.user || setAuthProviders(); //! Запрашиваем провайдеры только когда мы не аутентифицированы на странице
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
