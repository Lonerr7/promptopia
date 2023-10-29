import Prompt from '@/models/Prompt';
import { connectToDB } from '@/utils/connectToDB';

export const GET = async (
  req: Request,
  { params }: { params: { userId: string } }
) => {
  try {
    await connectToDB();

    const userPosts = await Prompt.find({
      creator: params.userId,
    }).populate('creator');

    return new Response(JSON.stringify(userPosts), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch posts', { status: 500 });
  }
};
