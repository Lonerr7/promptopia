import { SinglePostResponse } from '@/types/apiTypes';
import Image from 'next/image';
import { FC } from 'react';

interface Props {
  post: SinglePostResponse;
}

const Promptcard: FC<Props> = ({ post }) => {
  return (
    <div className="prompt_card">
      <div className="justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image
            className="rounded-full object-contain"
            src={post.creator?.image}
            alt="user"
            width={40}
            height={40}
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {post.creator.username}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {post.creator.email}
            </p>
          </div>
        </div>

        <button className="copy_btn" type="button">
          <button></button>
        </button>
      </div>
    </div>
  );
};

export default Promptcard;
