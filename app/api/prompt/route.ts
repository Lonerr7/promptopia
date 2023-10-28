import Prompt from '@/models/Prompt';
import { connectToDB } from '@/utils/connectToDB';

export const GET = async () => {
  try {
    await connectToDB();

    const posts = await Prompt.find().populate('creator');

    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch posts', { status: 500 });
  }
};
