import { FC } from 'react';
import Profile from '@/components/Profile';
import { getServerSession } from 'next-auth';
import { authConfig } from '@/configs/auth';
import { getUserPosts } from '@/services/posts';

const ProfilePage: FC = async () => {
  const session = await getServerSession(authConfig);
  const myPosts = await getUserPosts(session?.user.id, true);

  const handleEdit = () => {};
  const handleDelete = async () => {};

  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page"
      data={myPosts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default ProfilePage;
