import { CreatePromptState } from '@/types/zustandTypes';
import { create } from 'zustand';

export const useCreatePromptStore = create<CreatePromptState>((set) => ({
  prompt: null,
  isSubmitting: false,
  createPrompt: async () => {},
}));
