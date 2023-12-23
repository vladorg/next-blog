import { useAuth } from "@/hooks/useAuth";
import { notFound, redirect } from "next/navigation";


export const UnAuthorizedOnly = async ({ 
  children, 
  toPath
}: { 
  children: React.ReactNode,
  toPath?: string
}) => {
  const { isAuth } = await useAuth();

  return (
    <>
      { !isAuth ? children : (toPath ? redirect(toPath) : notFound())}
    </>
  )
}
