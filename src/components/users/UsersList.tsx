'use client';

import { FunctionComponent } from "react"
import { UserCard } from "./UserCard"
import { deleteUserAction } from "@/actions/user/deleteUserAction";
import toast from "react-hot-toast";
import { iTokenPayload, iUserInfo } from "@/types";

interface iUserListProps {
  users?: iUserInfo[], 
  userInfo?: iTokenPayload | null
}

export const UsersList: FunctionComponent<iUserListProps> = ({
  users,
  userInfo
}) => {
  const deleteHandler = async (id: string) => {
    const conf = confirm('Are you sure?')

    if (conf) {
      const { message, deletedUser } = await deleteUserAction(id);

      if (deletedUser) {
        toast.success('Success delete!');
      } else {
        console.log(message);        
        toast.error('Failed delete user!');
      }
    }
    
  }

  return (
    <ul role="list" className="divide-y divide-gray-100 mt-10">
      {users && users.map((person) => {
        const isMyCard = userInfo?.userId == person._id;
        const onDelete = userInfo?.userLevel === 1 
          ? (id: string) => deleteHandler(id) 
          : null;  
        
        return (
          <UserCard 
            key={person._id} 
            data={person} 
            onDelete={onDelete} 
            isMyCard={isMyCard}
          />
        )
      })}
    </ul>
  )
}
