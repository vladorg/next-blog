'use server';

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const useLogout = () => {
  const cookieStore = cookies();
  cookieStore.delete('Access-Token');

  revalidateTag('signin');

  return true
}
