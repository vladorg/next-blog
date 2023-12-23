'use server'; // SERVER ACTION

import { iSigninResponse } from "@/types/auth";
import { revalidateTag } from "next/cache";
import { cookies } from 'next/headers'

export const signinAction = async (formData: FormData): Promise<iSigninResponse>  => {
  try {
    const request = await fetch(`${process.env.API_URL}/auth/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(formData)),
      next: { revalidate: 10, tags: ['signin'] },
    });
  
    const { message, token, user } = await request.json() as iSigninResponse;

    // TODO: redirect after success auth  
    if (token) {
      console.log(`${message} ${token ? token : ''}`);
      
      revalidateTag('signin');
      cookies().set('Access-Token', token);
    } 

    return { message, token, user }
  } catch(err) {
    console.log(err);
    return { message: 'Failed auth!'}    
  }
}
