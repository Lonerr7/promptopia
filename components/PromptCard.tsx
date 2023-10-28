import { SinglePostResponse } from '@/types/apiTypes';
import { FC } from 'react';

interface Props {
  post: SinglePostResponse;
}

const Promptcard: FC<Props> = ({ post }) => {
  return <div>Promptcard</div>;
};

export default Promptcard;
