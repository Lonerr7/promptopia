import { Post, PostInput } from '@/types/zustandTypes';
import Link from 'next/link';

interface Props {
  type: 'Create';
  post: Post;
  isSubmitting: boolean;
  setPost: ({}: PostInput) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<Props> = ({
  type,
  post,
  isSubmitting,
  setPost,
  handleSubmit,
}) => {
  return (
    <section className="w-full max-w-full flex-center flex-col">
      <h1 className="head_text text-left blue_gradient">{type} Post</h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform
      </p>

      <form
        className="mt-10 w-full max-w-2xl flex-col gap-7 glassmorphism"
        onSubmit={handleSubmit}
      >
        <label htmlFor="prompt">
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Your AI Prompt
          </span>
        </label>
        <textarea
          className="form_textarea mb-5"
          name="prompt"
          id="prompt"
          value={post.prompt}
          onChange={(e) => {
            setPost({
              prompt: e.currentTarget.value,
            });
          }}
          required
          placeholder="Write your prompt here..."
        />

        <label htmlFor="tag">
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Tag{' '}
            <span className="font-normal">
              (#product, #webdevelopment, #idea)
            </span>
          </span>
        </label>
        <input
          className="form_input mb-5"
          name="tag"
          id="tag"
          value={post.tag}
          onChange={(e) => {
            setPost({
              tag: e.currentTarget.value,
            });
          }}
          required
          placeholder="#tag"
        />

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link className="text-gray-500 text-sm" href="/">
            Cancel
          </Link>
          <button
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
