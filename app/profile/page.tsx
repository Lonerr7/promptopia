'use client';

import { FC, useEffect } from 'react';
import Profile from '@/components/Profile';
import { usePostsStore } from '@/store/postsStore';
import { useSession } from 'next-auth/react';

const ProfilePage: FC = () => {
  const { posts, isFetching, setPosts } = usePostsStore((state) => ({
    posts: state.posts,
    isFetching: state.isFetching,
    setPosts: state.setPosts,
  }));
  const { data: session } = useSession();

  console.log(session);

  const handleEdit = () => {};
  const handleDelete = async () => {};

  useEffect(() => {
    console.log(`only once`);

    if (session && !posts.length) {
      console.log(`setting posts`);
      setPosts(session?.user.id);
    }
  }, []);

  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default ProfilePage;
