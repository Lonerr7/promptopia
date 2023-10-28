import { create } from 'zustand';
import { getProviders } from 'next-auth/react';
import { AuthState } from '@/types/zustandTypes';

export const useAuthStore = create<AuthState>((set) => ({
  providers: null,
  setAuthProviders: async () => {
    const response = await getProviders();

    if (!response) return null;

    set({ providers: response });
  },
}));
