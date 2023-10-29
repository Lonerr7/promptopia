import { PostsResponse } from '@/types/apiTypes';

export const getPosts = async () => {
  const response = await fetch('http://localhost:3000/api/prompt', {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
};

export const getUserPosts: (userId: string) => Promise<PostsResponse> = async (
  userId
) => {
  const response = await fetch(
    `http://localhost:3000/api/users/${userId}/posts`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
};
