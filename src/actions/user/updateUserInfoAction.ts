'use server'; // SERVER ACTION

import { useToken } from "@/hooks/useToken";
import { iUpdateUserResponse } from "@/types/users";

export const updateUserInfoAction = async (id: string, body: any): Promise<iUpdateUserResponse> => {
  try {    
    const token = useToken();
    const request = await fetch(`${process.env.API_URL}/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}` // this api route required authorization token
      },
      body: JSON.stringify(body)
    });
  
    const { message, updatedUser } = await request.json() as iUpdateUserResponse;
    
    return { message, updatedUser }
  } catch(err) {
    console.log(err);
    return { message: "Failed update user info!" }
  }
}
