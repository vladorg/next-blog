'use server'; // SERVER ACTION

import { useToken } from "@/hooks/useToken";
import { iAddPostResponse } from "@/types/posts";
import { revalidatePath } from "next/cache";

export const addPostAction = async (formData: FormData): Promise<iAddPostResponse> => {
  try {
    const token = useToken();    

    if (!token) {
      return { message: "You are not authorized!" }
    }

    const request = await fetch(`${process.env.API_URL}/posts/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}` // this api route required authorization token
      },
      body: JSON.stringify(Object.fromEntries(formData))
    });

    const { message, id, title } = await request.json() as iAddPostResponse;

    if (id) {
      console.log(`new post added: ${title}`);
      
      revalidatePath('/');
    } else {
      console.log(message);
    }

    return { message, id, title }
  } catch(err) {
    console.log(err);
    return { message: "Failed add post!" }
    
  }
  
}
