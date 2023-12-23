'use server'; // SERVER ACTION

import { iUpdatePostResponse } from "@/types/posts";
import { revalidatePath } from "next/cache";

export const updatePostAction = async (id: string, body: FormData): Promise<iUpdatePostResponse> => {
  try {
    const request = await fetch(`${process.env.API_URL}/posts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(body)),
      next: { tags: ['updatePost'] }
    });
  
    const { message, updatedPost} = await request.json() as iUpdatePostResponse; 
  
    if (updatedPost) {
      console.log(`post updated: ${updatedPost._id}, title: ${updatedPost.title}, content: ${updatedPost.content}`);
      
      revalidatePath('/');
    } else {
      console.log(message);
    }
  
    return { message, updatedPost }
  } catch(err) {
    console.log(err);
    return { message: "Failed update post!" }    
  }
}
