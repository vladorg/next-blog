'use client';

import { iPostCard } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react"

interface iPostCardProps {
  post: iPostCard,
  onUpdate: Function | null,
  onDelete: Function | null,
  isMyPost?: boolean
}

export const PostCard: FunctionComponent<iPostCardProps> = ({
  post, 
  onUpdate,
  onDelete,
  isMyPost
}) => {
  const {
    _id, title, content, date, authorId, authorInfo
  } = post;  

  return (
    <article className={`flex max-w-xl flex-col items-start justify-between border p-4 ${isMyPost ? 'border-green-600' : 'border-indigo-600'}`}>
      <div className="flex">
        <div className="flex items-center gap-x-4 text-xs">
          <time dateTime={date} className="text-gray-500">
            {date}
          </time>

          {onDelete && (
            <button
              onClick={() => onDelete(_id)}
              className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
            >
              delete
            </button>
          )}
          
        </div>
        <div className="flex items-center gap-x-4 text-xs ml-2">
          {onUpdate && (
            <button onClick={() => onUpdate(post)}
              className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
            >
              update
            </button>
          )}
          
        </div>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          <Link href={`/posts/${_id}`}>
            <span className="absolute inset-0" />
            {title}
          </Link>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{content}</p>
      </div>

      <div className="relative mt-8 flex items-center gap-x-4">
        {authorInfo?.photo ? (
          <>
            <Image src={authorInfo?.photo || ''} alt="user" width={40} height={40} className="h-10 w-10 rounded-full bg-gray-50" unoptimized />
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">
                <a href="#">
                  <span className="absolute inset-0" />
                  {authorInfo?.name || ''}
                </a>
              </p>
              <p className="text-gray-600">{authorInfo?.role || ''}</p>
            </div>
          </>
        ) : (
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              {authorInfo?.name || ''}
            </p>
          </div>
        )}        
      </div>
    </article>
  )
}
