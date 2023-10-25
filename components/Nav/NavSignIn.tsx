import { BuiltInProviderType } from 'next-auth/providers/index';
import { signIn, LiteralUnion, ClientSafeProvider } from 'next-auth/react';

interface Props {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
}

const NavSignIn: React.FC<Props> = ({ providers }) => {
  return (
    <>
      {providers &&
        Object.values(providers).map((provider) => (
          <button
            className="black_btn"
            key={provider.name}
            type="button"
            onClick={() => signIn(provider.id)} //! возможно сюда еще можно передать provider.name?
          >
            Sign In
          </button>
        ))}
    </>
  );
};

export default NavSignIn;
