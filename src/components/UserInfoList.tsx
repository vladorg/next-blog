'use client';

import { FunctionComponent } from "react";
import { EditRow } from "./ui/EditRow";
import { iUserInfoList } from "@/types/general";
import { updateUserInfoAction } from "@/actions/user/updateUserInfoAction";
import toast from "react-hot-toast";

export const UserInfoList: FunctionComponent<iUserInfoList> = ({ rows, userId }) => {

  const onSaveHandler = async (rowName: string, newVal: string) => {
    const { message, updatedUser } = await updateUserInfoAction(userId, {[rowName]: newVal});

    if (updatedUser) {
      toast.success('Success changed!');
    } else {
      toast.error(message);
    }
  }

  return (
    <>
      { rows.map(({title, content, name, readonly }, i) => (
        <EditRow
          key={i} 
          title={title}
          content={content}
          name={name}
          readonly={readonly || false}
          onSave={(rowName: string, val: string) => onSaveHandler(rowName, val)} 
        />
      )) }
    </>    
  )
}
