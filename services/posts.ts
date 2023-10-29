import { PostsResponse, SinglePostResponse } from '@/types/apiTypes';

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

export const getUserPosts: (
  userId: string,
  fromServer?: boolean
) => Promise<SinglePostResponse[]> = async (userId, fromServer) => {
  const response = await fetch(
    `http://localhost:3000/api/users/${userId}/posts`,
    {
      next: fromServer
        ? {
            revalidate: 60,
          }
        : {
            revalidate: 0,
          },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
};
