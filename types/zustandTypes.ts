import { LiteralUnion, ClientSafeProvider } from 'next-auth/react';
import { BuiltInProviderType } from 'next-auth/providers/index';
import { PostsResponse } from './apiTypes';

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
  createPost: (userId: string) => Promise<Response | undefined>;
}

// === PostsStore ===
export interface PostsStoreState {
  posts: PostsResponse;
  isFetching: boolean;
  setPosts: (userId: string) => Promise<void>;
}
