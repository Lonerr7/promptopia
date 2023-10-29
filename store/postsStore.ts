import { getUserPosts } from '@/services/posts';
import { PostsStoreState } from '@/types/zustandTypes';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const usePostsStore = create<PostsStoreState>()(
  devtools((set) => ({
    posts: [],
    isFetching: false,
    setPosts: async (userId: string) => {
      try {
        set({ isFetching: true });
        const posts = await getUserPosts(userId);
        set({ posts, isFetching: false });
      } catch (error) {
        console.log(error);
      }
    },
  }))
);
