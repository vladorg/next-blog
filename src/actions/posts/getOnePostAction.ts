'use server';  // SERVER ACTION

import { iPostCard } from "@/types";

interface iGetOnePostsResponse {
  message: string,
  post?: iPostCard[]
}

export const getOnePostAction = async (id: string): Promise<iGetOnePostsResponse> => {
  try {
    const request = await fetch(`${process.env.API_URL}/posts/${id}`);    
    const { message, post } = await request.json() as iGetOnePostsResponse;

    if (!post) {
      console.log('cannot find post with this id!');
    }

    return { message, post }
  } catch(err) {
    console.log(err);
    return { message: "Failed load post!" }
  }
}
