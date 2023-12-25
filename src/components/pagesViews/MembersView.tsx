import { getAllUsersAction } from "@/actions/user/getAllUsersAction";
import { UsersList } from "../users/UsersList";
import { useAuth } from "@/hooks/useAuth";
import { delay } from "@/utils/delay";


export const MembersView = async () => {
  const { users } = await getAllUsersAction();    
  const { isAuth, info } = await useAuth(); 
  await delay(500);

  return (
    <>
      <div className="py-12">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Members</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Here you can see all members from this site
          </p>
        </div>
        <UsersList users={users} userInfo={info}/>
      </div>
    </>
  )
}
