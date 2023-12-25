'use server'; // SERVER ACTION

import { useToken } from "@/hooks/useToken";
import { iUserInfo } from "@/types";

interface iGetUserResponse {
  message: string,
  user?: iUserInfo
}

export const getUserInfoAction = async (id: string): Promise<iGetUserResponse> => {
  const token = useToken();
  try {    
    const request = await fetch(`${process.env.API_URL}/users/${id}`, {
      headers: {
        "Authorization": `Bearer ${token}` // this api route required authorization token
      }
    });

    // TODO: no cache when call from client component
    
    const { message, user } = await request.json() as iGetUserResponse; 

    if (!user) {
      console.log(message);
    }

    return { message, user } 
  } catch (err) {
    console.log(err);
    return { message: "Failed get user unfo!" }
  }
}
