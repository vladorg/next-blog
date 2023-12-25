import { getOnePostAction } from "@/actions/posts/getOnePostAction"
import { delay } from "@/utils/delay";
import { notFound } from "next/navigation";



export const PostView = async ({ postId }: { postId: string }) => {
  const { post } = await getOnePostAction(postId);

  if (!post) {
    notFound();
  }

  const { title, content } = post;

  return (
    <>
      <div className="bg-white py-12 lg:py-32">
        <div>
          <div className="mx-auto lg:mx-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h1>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              {content}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
