import { CreatePostState } from '@/types/zustandTypes';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const useCreatePostStore = create<CreatePostState>()(
  devtools((set, get) => ({
    post: {
      prompt: '',
      tag: '',
    },
    isSubmitting: false,
    setPost: ({ prompt, tag }) =>
      set((state) => {
        return {
          post: {
            prompt: prompt !== undefined ? prompt : state.post.prompt,
            tag: tag !== undefined ? tag : state.post.tag,
          },
        };
      }),
    createPost: async (userId: string) => {
      try {
        set({ isSubmitting: true });
        const currentPost = get().post;

        const response = await fetch('/api/prompt/new', {
          method: 'POST',
          body: JSON.stringify({
            ...currentPost,
            userId,
          }),
        });

        return response;
      } catch (error) {
        console.log(error); //!
      } finally {
        set({ isSubmitting: false });
      }
    },
  }))
);
