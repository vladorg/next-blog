import { UserCardSkeleton } from "./UserCardSkeleton";


export const MembersSkeleton = () => (
  <>
    <div className="bg-white py-16 animate-pulse">
      <div>
        <div className="mx-auto lg:mx-0">
          <div className="w-full grid grid-cols-3 mb-8">
            <div className="h-2 bg-slate-200 rounded col-span-1"></div>
          </div>
          <div className="w-full grid grid-cols-3 mb-8">
            <div className="h-1 bg-slate-200 rounded col-span-1"></div>
          </div>
        </div>
        <div className="divide-y divide-gray-100 mt-10">
          <UserCardSkeleton />
          <UserCardSkeleton />
          <UserCardSkeleton />
          <UserCardSkeleton />
          <UserCardSkeleton />
        </div>
      </div>
    </div>
  </>
)
