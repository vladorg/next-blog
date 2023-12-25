'use server'; // SERVER ACTION

import { useToken } from "@/hooks/useToken";
import { iPostCard } from "@/types";
import { revalidatePath } from "next/cache";

interface iUpdatePostResponse {
  message: string,
  updatedPost?: iPostCard
}

export const updatePostAction = async (id: string, body: FormData): Promise<iUpdatePostResponse> => {
  try {
    const token = useToken(); 
    const request = await fetch(`${process.env.API_URL}/posts/${id}`, {
      method: "PUT",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
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
