import { PostCardSkeleton } from "./PostCardSkeleton";

export const BlogSkeleton = () => (
  <>
    <div className="bg-white py-12 animate-pulse">
      <div>
        <div className="mx-auto lg:mx-0">
          <div className="w-full grid grid-cols-3 mb-8">
            <div className="h-2 bg-slate-200 rounded col-span-1"></div>
          </div>
          <div className="w-full grid grid-cols-3 mb-8">
            <div className="h-1 bg-slate-200 rounded col-span-1"></div>
          </div>
        </div>
        <div className="mx-auto mt-10 grid grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <PostCardSkeleton />
          <PostCardSkeleton /> 
          <PostCardSkeleton /> 
        </div>
      </div>
    </div>
  </>
)
