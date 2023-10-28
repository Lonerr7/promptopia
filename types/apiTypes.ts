import { Post } from './zustandTypes';
import { User } from 'next-auth';

export interface UserResponse {
  id: string;
  username: string;
  image: string;
  email: string;
}

export interface SinglePostResponse extends Post {
  id: string;
  creator: UserResponse;
}

export type PostsResponse = Array<SinglePostResponse>;
