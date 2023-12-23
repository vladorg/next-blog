import { cookies } from "next/headers"


export const useToken = (): string => {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get('Access-Token');
    
    return token ? token.value : ''

  } catch(err) {
    console.log(err);     
    return ''
  }
}
