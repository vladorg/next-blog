'use server'; // SERVER ACTION
 
import { iDeletePostResponse } from "@/types/posts";
import { revalidatePath, revalidateTag } from "next/cache";

export const deletePostAction = async (id: string): Promise<iDeletePostResponse> => {
  try {
    const request = await fetch(`${process.env.API_URL}/posts/${id}`, {
      method: "DELETE",
      next: { tags: ['postDelete'] },
    });
  
    const { message, deletedPost } = await request.json() as iDeletePostResponse; 
  
    if (deletedPost) {
      console.log(`deleted post id: ${deletedPost._id}`);    
      revalidatePath('/');
      revalidateTag('postDelete');
    } else {
      console.log(message);   
    }
  
    return { message, deletedPost }
  } catch(err) {
    return { message: "Failed delete post!" }
  } 
}
