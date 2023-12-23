'use server'; // SERVER ACTION

import { iGetAllPostsResponse } from "@/types/posts";

export const getAllPostsAction = async (): Promise<iGetAllPostsResponse> => {
  try {
    const request = await fetch(`${process.env.API_URL}/posts`);    
    const { message, posts } = await request.json() as iGetAllPostsResponse;

    if (!posts) {
      console.log('no posts...');
    }

    return { message, posts }
  } catch(err) {
    console.log(err);
    return { message: "Failed load posts!" }
  }
}

export const getPostsByAuthor = async (id: string): Promise<iGetAllPostsResponse> => {
  try {
    const request = await fetch(`${process.env.API_URL}/posts?authorId=${id}`); 
    const { message, posts } = await request.json() as iGetAllPostsResponse;

    if (!posts) {
      console.log('no posts...');
    }

    return { message, posts }
  } catch(err) {
    console.log(err);
    return { message: "Failed load posts!" }
  }
}
