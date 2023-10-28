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

export interface Post {
  prompt: string;
  tag: string;
}

export interface PostInput {
  prompt?: string;
  tag?: string;
}

export interface CreatePostState {
  post: Post;
  isSubmitting: boolean;
  setPost: ({ prompt, tag }: PostInput) => void;
  createPost: () => void; // !
}
