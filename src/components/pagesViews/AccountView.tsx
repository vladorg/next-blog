import { getUserInfoAction } from "@/actions/user/getUserInfoAction";
import { notFound } from "next/navigation";
import { UserInfoList } from "../users/UserInfoList";
import { useAuth } from "@/hooks/useAuth";
import { ForbiddenError } from "../errors/Forbidden";
import { getPostsByAuthor } from "@/actions/posts/getAllPostsAction";
import { PostList } from "../posts/PostsList";
import { useCardAuthorInfo } from "@/hooks/useCardAuthorInfo";

export const AccountView = async ({ userId }: { userId: string }) => {
  const { info } = await useAuth();

  if (info?.userId != userId && info?.userLevel !== 1) { // only admins or current user can see this page
    return <ForbiddenError />
  }

  const { user } = await getUserInfoAction(userId);

  if (!user) { // trigger 404 if user id is doesn't exists
    notFound();
  }   

  const { name, role, login, level, _id, photo } = user;
  const { posts } = await getPostsByAuthor(_id); 
  await useCardAuthorInfo(posts || []);
  

  let userRows = [
    { title: "Full name", content: name, name: "name" },
    { title: "Role", content: role, name: "role" },
    { title: "Photo", content: photo, name: "photo", type: "file" },
    { title: "Login", content: login, name: "login", readonly: true },
    { title: "Account level", content: level, name: "level", readonly: true },
    { title: "Account id", content: _id, name: "id", readonly: true },
  ];
  

  return (
    <>
      <div>
        <div className="px-4 sm:px-0 my-10">
          <h1 className="text-base font-semibold leading-7 text-gray-900">Account Information</h1>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details.</p>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <UserInfoList rows={userRows} userId={userId} />
          </dl>
        </div>

        <div className="px-4 sm:px-0 my-10">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Your posts:</h2>
          <div className="mx-auto mt-10 grid grid-cols-1 gap-x-8 gap-y-16 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            { posts?.length ? (
              <PostList posts={posts} userInfo={info || null} />
            ) : 'No posts...'}
          </div>
        </div>
      </div>
    </>
  )
}
