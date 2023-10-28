import { LiteralUnion, ClientSafeProvider } from 'next-auth/react';
import { BuiltInProviderType } from 'next-auth/providers/index';

// === AuthStore ===

export interface AuthState {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
  setAuthProviders: () => Promise<null | undefined>;
}

// === CreatePromptStore ===

export interface Prompt {
  prompt: string;
  tag: string;
}

export interface CreatePromptState {
  prompt: Prompt | null;
  isSubmitting: boolean;
  createPrompt: () => void; // !
}
