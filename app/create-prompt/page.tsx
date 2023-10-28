'use client';

import Form from '@/components/Form';
import { useCreatePostStore } from '@/store/createPromptStore';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const CreatePrompt = () => {
  const { post, isSubmitting, setPost, createPost } = useCreatePostStore(
    (state) => ({
      post: state.post,
      createPost: state.createPost,
      setPost: state.setPost,
      isSubmitting: state.isSubmitting,
    })
  );
  const { data: sessionData } = useSession();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await createPost(sessionData?.user.id);

    if (response?.ok) {
      router.push('/');
    }

    setPost({
      prompt: '',
      tag: '',
    });
  };

  useEffect(() => {
    // Preventing an access to this page if we are not signed in
    if (!sessionData?.user) {
      router.push('/');
    }
  }, []);

  return (
    <Form
      type="Create"
      post={post}
      isSubmitting={isSubmitting}
      handleSubmit={handleSubmit}
      setPost={setPost}
    />
  );
};

export default CreatePrompt;
