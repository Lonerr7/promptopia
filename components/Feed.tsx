import { PostsResponse } from '@/types/apiTypes';
import Search from './Search';
import PromptCardList from './PromptCardList';

const getPosts = async () => {
  const response = await fetch('http://localhost:3000/api/prompt', {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
};

const Feed: React.FC = async () => {
  const posts: PostsResponse = await getPosts();

  return (
    <section className="feed">
      <Search />
      <PromptCardList data={posts} />
    </section>
  );
};

export default Feed;
