'use client';

import { SinglePostResponse } from '@/types/apiTypes';
import Image from 'next/image';
import { FC, useState } from 'react';
import copyImg from '@/public/assets/icons/copy.svg';
import tickImg from '@/public/assets/icons/tick.svg';

interface Props {
  post: SinglePostResponse;
}

const Promptcard: FC<Props> = ({ post }) => {
  const [copied, setCopied] = useState('');

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);

    setTimeout(() => {
      setCopied('');
    }, 3000);
  };

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
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

        <button className="copy_btn" type="button" onClick={handleCopy}>
          <Image
            src={copied ? tickImg : copyImg}
            width={12}
            height={12}
            alt="copy"
          />
        </button>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700">{post.prompt}</p>
      <p className="font-inter text-sm blue_gradient cursor-pointer">
        {post.tag}
      </p>
    </div>
  );
};

export default Promptcard;
