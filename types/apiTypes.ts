import { Post } from './zustandTypes';
import { User } from 'next-auth';

export interface UserResponse {
  _id: string;
  username: string;
  image: string;
  email: string;
}

export interface SinglePostResponse extends Post {
  _id: string;
  creator: UserResponse;
}

export type PostsResponse = Array<SinglePostResponse>;
