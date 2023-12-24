'use server'; // SERVER ACTION

import { iRegisterResponse } from "@/types/auth";
import { revalidateTag } from "next/cache";


export const registerAction = async (formData: FormData): Promise<iRegisterResponse> => {   
  try {    
    const request = await fetch(`${process.env.API_URL}/auth/register`, {
      method: "POST",
      body: formData,
      next: { revalidate: 10, tags: ['register'] },
    });
  
    const { message, newUser } = await request.json() as iRegisterResponse;
  
    if (newUser) {
      console.log(`new user registered: ${newUser.login}`);
      revalidateTag('register');
    } else {
      console.log(message);
    }
  
    return { message, newUser }
  } catch(err) {
    console.log(err);
    return { message: 'Failed register!' }    
  }
}
