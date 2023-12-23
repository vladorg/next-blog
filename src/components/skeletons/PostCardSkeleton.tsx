


export const PostCardSkeleton = () => {

  return (
    <div className="border border-indigo-600 flex shadow p-4 pt-6 max-w-sm w-full mx-auto">
      <div className="animate-pulse w-full flex flex-col justify-between">

        <div className="w-full grid grid-cols-3 mb-8">
          <div className="h-2 bg-slate-200 rounded col-span-1"></div>
        </div>

        <div className="w-full grid grid-cols-3 mb-8">
          <div className="h-3 bg-slate-200 rounded col-span-2 mb-8"></div>
          <div className="h-2 bg-slate-200 rounded col-span-2"></div>
        </div>

        <div className="flex space-x-4 w-full items-center">
          <div className="rounded-full bg-slate-200 h-10 w-10"></div>
          <div className="flex-1 space-y-6 py-1">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
