import { FC } from 'react';
import PromptCardList from './PromptCardList';
import { SinglePostResponse } from '@/types/apiTypes';

interface Props {
  name: string;
  desc: string;
  data: SinglePostResponse[];
  handleEdit: () => void;
  handleDelete: (postId: string) => Promise<void>;
}

const Profile: FC<Props> = ({ name, desc, data, handleDelete, handleEdit }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>
      <PromptCardList data={data} handleDelete={handleDelete} />
    </section>
  );
};

export default Profile;
