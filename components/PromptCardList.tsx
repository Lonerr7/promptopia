import { PostsResponse } from '@/types/apiTypes';
import { FC } from 'react';
import Promptcard from './PromptCard';

interface Props {
  data: PostsResponse;
}

const PromptCardList: FC<Props> = ({ data }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <Promptcard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PromptCardList;
