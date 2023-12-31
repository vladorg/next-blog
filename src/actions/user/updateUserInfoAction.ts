'use server'; // SERVER ACTION

import { useToken } from "@/hooks/useToken";
import { iUserInfo } from "@/types";
import { revalidatePath } from "next/cache";

interface iUpdateUserResponse {
  message: string,
  updatedUser?: iUserInfo
}

export const updateUserInfoAction = async (id: string, body: FormData): Promise<iUpdateUserResponse> => {
  try {    
    const token = useToken();
    const request = await fetch(`${process.env.API_URL}/users/${id}`, {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${token}` // this api route required authorization token
      },
      body
    });
  
    const { message, updatedUser } = await request.json() as iUpdateUserResponse;

    revalidatePath(`/account/:id`);
    revalidatePath(`/members`);
    
    return { message, updatedUser }
  } catch(err) {
    console.log(err);
    return { message: "Failed update user info!" }
  }
}
