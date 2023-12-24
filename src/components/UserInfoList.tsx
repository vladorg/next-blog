'use client';

import { FunctionComponent, useRef } from "react";
import { EditRow } from "./ui/EditRow";
import { iUserInfoList } from "@/types/general";
import { updateUserInfoAction } from "@/actions/user/updateUserInfoAction";
import toast from "react-hot-toast";

export const UserInfoList: FunctionComponent<iUserInfoList> = ({ rows, userId }) => {
  const formRef = useRef<HTMLFormElement | any>(null);
  
  const actionHandler = async () => {
    const formData = new FormData(formRef.current);    
    
    const { message, updatedUser } = await updateUserInfoAction(userId, formData); 

    if (updatedUser) {
      toast.success('Success changed!');
    } else {
      toast.error(message);
    }
  }

  return (
    <>
      <form ref={formRef}>
        { rows.map(({title, content, name, type, readonly }, i) => (
          <EditRow
            key={i} 
            title={title}
            content={content}
            name={name}
            type={type || "text"}
            readonly={readonly || false}
            onSave={actionHandler} 
          />
        )) }
      </form>
    </>    
  )
}
