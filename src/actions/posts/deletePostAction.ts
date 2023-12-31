'use server'; // SERVER ACTION
 
import { useToken } from "@/hooks/useToken";
import { iPostCard } from "@/types";
import { revalidatePath, revalidateTag } from "next/cache";

interface iDeletePostResponse {
  message: string,
  deletedPost?: iPostCard
}

export const deletePostAction = async (id: string): Promise<iDeletePostResponse> => {
  try {
    const token = useToken(); 
    const request = await fetch(`${process.env.API_URL}/posts/${id}`, {
      method: "DELETE",
      headers: { "Authorization": `Bearer ${token}` }, // this api route required authorization token}
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
