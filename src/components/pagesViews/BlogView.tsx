import { PostList } from "../posts/PostsList";
import { useAuth } from "@/hooks/useAuth";
import { getAllPostsAction } from "@/actions/posts/getAllPostsAction";
import { delay } from "@/utils/delay";
import { useCardAuthorInfo } from "@/hooks/useCardAuthorInfo";


export const BlogView = async () => {
  const { posts } = await getAllPostsAction();
  const { isAuth, info } = await useAuth();  
  
  await useCardAuthorInfo(posts || []);  
  await delay(500);

  return (
    <>
      <div className="bg-white py-12">
        <div>
          <div className="mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className="mx-auto mt-10 grid grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts?.length ? (
              <PostList posts={posts} userInfo={info} />
            ) : 'No posts...'}            
          </div>
        </div>
      </div>
    </>
  )
}
