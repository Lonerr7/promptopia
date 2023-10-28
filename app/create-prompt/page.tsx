'use client';

import Form from '@/components/Form';
import { useCreatePostStore } from '@/store/createPromptStore';

const CreatePrompt = () => {
  const { post, isSubmitting, setPost, createPost } = useCreatePostStore(
    (state) => ({
      post: state.post,
      createPost: state.createPost,
      setPost: state.setPost,
      isSubmitting: state.isSubmitting,
    })
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

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
