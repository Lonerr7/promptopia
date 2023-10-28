import { Post } from './zustandTypes';
export interface SinglePostResponse extends Post {
  id: string;
  creator: string;
}

export type PostsResponse = Array<SinglePostResponse>;
