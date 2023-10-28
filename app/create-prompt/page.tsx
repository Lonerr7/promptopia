'use client';

import Form from '@/components/Form';
import { useCreatePromptStore } from '@/store/createPromptStore';

const CreatePrompt = () => {
  const { prompt, isSubmitting, createPrompt } = useCreatePromptStore(
    (state) => ({
      prompt: state.prompt,
      createPrompt: state.createPrompt,
      isSubmitting: state.isSubmitting,
    })
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};

  return (
    <Form
      type="Create"
      post={prompt}
      isSubmitting={isSubmitting}
      handleSubmit={handleSubmit}
    />
  );
};

// Остановился на 1:50:17

export default CreatePrompt;
