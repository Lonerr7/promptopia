import { create } from 'zustand';
import { LiteralUnion, ClientSafeProvider } from 'next-auth/react';
import { BuiltInProviderType } from 'next-auth/providers/index';
import { getProviders } from 'next-auth/react';

interface AuthState {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
  setAuthProviders: () => Promise<null | undefined>;
}

export const useAuthStore = create<AuthState>((set) => ({
  providers: null,
  setAuthProviders: async () => {
    const response = await getProviders();

    if (!response) return null;

    set({ providers: response });
  },
}));
