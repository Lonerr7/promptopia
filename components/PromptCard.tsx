'use client';

import { SinglePostResponse } from '@/types/apiTypes';
import Image from 'next/image';
import { FC, useState, useTransition } from 'react';
import copyImg from '@/public/assets/icons/copy.svg';
import tickImg from '@/public/assets/icons/tick.svg';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';

interface Props {
  post: SinglePostResponse;
  handleEdit?: () => void;
  handleDelete?: (postId: string) => Promise<void>;
}

const Promptcard: FC<Props> = ({ post, handleDelete, handleEdit }) => {
  // Тут возможно не хватает еще следующих функций: handleTagClick
  const { data: session } = useSession();
  const pathName = usePathname();
  const [isPending, startTransition] = useTransition();

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
        <div
          className="flex-1 flex justify-start items-center gap-3 cursor-pointer"
          onClick={handleCopy}
        >
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

      {session?.user.id && post.creator._id && pathName === '/profile' && (
        <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
          <button
            className="font-inter text-sm green_gradient cursor-pointer"
            onClick={() => startTransition(() => handleEdit && handleEdit())} //!
          >
            Edit
          </button>
          <button
            className="font-inter text-sm orange_gradient cursor-pointer"
            onClick={() => {
              console.log(`clicked`);
              handleDelete && startTransition(() => handleDelete(post._id));
            }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Promptcard;
