'use client';

import { useLogout } from "@/hooks/useLogout";
import { redirect } from "next/navigation";
import { useEffect } from "react";


export const LogoutView = () => {

  useEffect(() => {
    const logout = useLogout();

    redirect('/');
  }, []);

  return (
    <></>
  )
}
