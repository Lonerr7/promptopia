import { PostsResponse } from '@/types/apiTypes';
import Search from './Search';
import PromptCardList from './PromptCardList';
import { getPosts } from '@/services/posts';

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
