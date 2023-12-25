'use server';
import { iUserInfo } from "@/types";

// SERVER ACTION

interface iGetAllUsersResponse {
  message: string,
  users?: iUserInfo[]
}

export const getAllUsersAction = async (): Promise<iGetAllUsersResponse> => {
  try {    
    const request = await fetch(`${process.env.API_URL}/users`);    
    const { message, users } = await request.json() as iGetAllUsersResponse; 

    if (!users) {
      console.log(message);
    }

    return { message, users } 
  } catch (err) {
    console.log(err);
    return { message: "Failed get users!" }
  }
}
