

export const UserCardSkeleton = () => (
  <li className="flex justify-between items-center gap-x-6 p-5 py-10">
      <div className="flex min-w-0 gap-x-4 items-center">
        <div className="rounded-full bg-slate-200 dark:bg-slate-700 h-10 w-10"></div>
        <div className="min-w-0 w-28 flex-auto">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="h-2 bg-slate-200 rounded mt-6"></div>
        </div>
      </div>
      <div className="sm:flex sm:flex-col sm:items-end">
        <div className="w-28 h-2 bg-slate-200 rounded"></div>
      </div>
      
    </li>
)
