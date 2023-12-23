import { iTokenPayload } from "@/types/general";
import { cookies } from "next/headers";

export interface iUseAuthResponse {
  isAuth: boolean,
  info: iTokenPayload | null
}

export const useAuth = async (): Promise<iUseAuthResponse> => {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get('Access-Token');
    let isAuth = false;
    let info = null;

    if (!token) {      
      return { isAuth, info };
    }
    //  TODO: when token expire - need hard reload page to change app state depend of auth

    const request = await fetch(`${process.env.API_URL}/auth/check`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token.value}`
      },
      next: { revalidate: 10, tags: ['signin'] },
    });

    if (request.status == 200) {
      isAuth = true;
      const data = await request.json();   
      info = data.info;  
    }

    

    return { isAuth, info }

  } catch(err) {
    console.log(err); 
    
    return { isAuth: false, info: null}
  }
  

}
