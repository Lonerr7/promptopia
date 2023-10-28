'use client';

import Link from 'next/link';
import { signOut } from 'next-auth/react';

const AuthenticatedNav = () => {
  return (
    <>
      <Link className="black_btn" href="/create-prompt">
        Create Post
      </Link>
      <button
        className="outline_btn"
        type="button"
        onClick={() => {
          signOut();
        }}
      >
        Sign Out
      </button>
    </>
  );
};

export default AuthenticatedNav;
