import { CreatePostState, Post } from '@/types/zustandTypes';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const useCreatePostStore = create<CreatePostState>()(
  devtools((set) => ({
    post: {
      prompt: '',
      tag: '',
    },
    isSubmitting: false,
    setPost: ({ prompt, tag }) =>
      set((state) => {
        return {
          post: {
            prompt: prompt ? prompt : state.post.prompt,
            tag: tag ? tag : state.post.tag,
          },
        };
      }),
    createPost: async () => {},
  }))
);
