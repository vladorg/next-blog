'use client';

import { iUserInfo } from "@/types";

export const UserCard = (
  { data, 
    onDelete, 
    isMyCard 
  }: { 
    data: iUserInfo, 
    onDelete: Function | null, 
    isMyCard: boolean
  }) => {
  const { photo, name, role, _id, login } = data;

  return (
    <li className={`flex justify-between items-center gap-x-6 p-5 ${isMyCard ? 'bg-[#f2f2f2] font-bold' : ''}`}>
      <div className="flex min-w-0 gap-x-4">
        <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={photo} alt="" />
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold leading-6 text-gray-900">{name}</p>
          <p className="mt-1 truncate text-xs leading-5 text-gray-500">{role}</p>
        </div>
      </div>
      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p className="text-sm leading-6 text-gray-900">Login: {login}</p>
        {onDelete && (
          <button 
            onClick={() => onDelete(_id)} 
            className="my-2 relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-xs text-gray-600 hover:bg-gray-100"
          >
            delete
          </button>
        )}
        {/* {person.lastSeen ? (
          <p className="mt-1 text-xs leading-5 text-gray-500">
            Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
          </p>
        ) : (
          <div className="mt-1 flex items-center gap-x-1.5">
            <div className="flex-none rounded-full bg-emerald-500/20 p-1">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </div>
            <p className="text-xs leading-5 text-gray-500">Online</p>
          </div>
        )} */}
      </div>
      
    </li>
  )
}
