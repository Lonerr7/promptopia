'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';
import logo from '@/public/assets/images/logo.svg';

const Nav = () => {
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

      {/* Mobile Nav */}
      {/* <ul className="flex-between  mb-16 ">
        <li></li>
      </ul> */}
    </nav>
  );
};

export default Nav;
