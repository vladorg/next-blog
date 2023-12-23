import { iTokenPayload } from "./general"

export interface iPostCard {
  _id: string,
  title: string,
  content: string,
  date: string,
  author: {
    name: string,
    role: string, 
    id: string, 
    login: string
  },
}

export interface iPostCardProps {
  post: iPostCard,
  onUpdate: Function | null,
  onDelete: Function | null,
  isMyPost?: boolean
}

export interface iPostDeleteProps {
  id: string
}

export interface iPostListProps {
  posts?: Array<iPostCard>, 
  userInfo?: iTokenPayload | null
}

export interface iUpdatedFiels {
  newTitle: string, 
  newContent: string, 
  currentPostId: string
}


// POSTS API RESPONSES

export interface iPostsApi {
  message: string,
}

export interface iGetAllPostsResponse extends iPostsApi {
  posts?: Array<iPostCard>
}

export interface iGetOnePostsResponse extends iPostsApi {
  post?: iPostCard
}

export interface iAddPostResponse extends iPostsApi {
  title?: string,
  id?: string
}

export interface iDeletePostResponse extends iPostsApi {
  deletedPost?: iPostCard
}

export interface iUpdatePostResponse extends iPostsApi {
  updatedPost?: iPostCard
}
