import Prompt from '@/models/Prompt';
import { connectToDB } from '@/utils/connectToDB';

export const POST = async (req: Request, res: Response) => {
  const { userId, prompt, tag } = await req.json();

  try {
    await connectToDB();

    const newPrompt = await Prompt.create({
      creator: userId,
      prompt,
      tag,
    });

    return new Response(JSON.stringify(newPrompt), {
      status: 201,
    });
  } catch (error) {
    return new Response('Failed to create a new prompt', {
      status: 500,
    });
  }
};
