import { PostsResponse } from '@/types/apiTypes';
import { FC } from 'react';
import Promptcard from './PromptCard';

interface Props {
  data: PostsResponse;
  handleEdit?: () => void;
  handleDelete?: (postId: string) => Promise<void>;
}

const PromptCardList: FC<Props> = ({ data, handleDelete, handleEdit }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <Promptcard
          key={post._id}
          post={post}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
};

export default PromptCardList;
