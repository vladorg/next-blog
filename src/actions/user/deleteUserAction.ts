'use server'; // SERVER ACTION

import { useToken } from "@/hooks/useToken";
import { iUserInfo } from "@/types";
import { revalidatePath } from "next/cache";

interface iDeleteUserResponse {
  message: string,
  deletedUser?: iUserInfo
}

export const deleteUserAction = async (id: string): Promise<iDeleteUserResponse> => {
  try {
    const token = useToken();
    const request = await fetch(`${process.env.API_URL}/users/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}` // this api route required authorization token
      }
    });

    const { message, deletedUser } = await request.json() as iDeleteUserResponse;

    revalidatePath(`/members`);

    return { message, deletedUser }

  } catch(err) {
    console.log(err);
    return { message: "Failed delete user!" }
  }

}
