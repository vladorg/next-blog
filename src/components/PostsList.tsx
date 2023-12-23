'use client'

import { FunctionComponent } from "react"
import { useState } from 'react'
import { PostCard } from "./PostCard"
import { updatePostAction } from "@/actions/posts/updatePostAction"
import { deletePostAction } from "@/actions/posts/deletePostAction"
import toast from "react-hot-toast"
import { iPostCard, iPostListProps, iUpdatedFiels } from "@/types/posts"
import { PostUpdateModal } from "./ui/modals/PostUpdateModal"
import { revalidateTag } from "next/cache"


export const PostList: FunctionComponent<iPostListProps> = ({ 
  posts, 
  userInfo
}) => {
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<string>('')
  const [currentTitle, setCurrentTitle] = useState<string>('')
  const [currentContent, setCurrentContent] = useState<string>('')  

  const modalClear = () => {
    setCurrentId('');
    setCurrentTitle('');
    setCurrentContent('');    
    setModalActive(false);
  }

  const updateOpenHandler = (post: iPostCard) => {
    const {_id, title, content} = post;    

    setCurrentId(_id);
    setCurrentTitle(title);
    setCurrentContent(content);

    setModalActive(true);
  }

  const updateSaveHandler = async (data: iUpdatedFiels) => {
    const { newTitle, newContent, currentPostId } = data;    

    if (newTitle) {
      const formData = new FormData();
      formData.append('title', newTitle);
      formData.append('content', newContent);

      const { message, updatedPost } = await updatePostAction(currentPostId, formData);    

      if (updatedPost) {
        modalClear();
        toast.success('Post updated!')
      } else {
        toast.error(message)
      }
    } else {
      toast.error('Title is required!')
    }   
  }

  const deleteHandler = async (id: string) => {
    const conf = confirm('Are you sure?')

    if (conf) {
      const { message, deletedPost } = await deletePostAction(id);

      if (deletedPost) {
      toast.success('Post deleted!')
      } else {
      toast.error('Failed delete!');
      }
    }
  } 
  

  // TODO: empty posts msg view

  return (
    <>
      {posts?.length && posts.map((post: iPostCard) => {
        const isMyPost = userInfo?.userId == post.author.id;
        const onUpdate = 
          isMyPost 
          ||
          userInfo?.userLevel === 1 
          ||
          userInfo?.userLevel === 2
            ? (post: iPostCard) => updateOpenHandler(post) 
            : null;

        const onDelete = userInfo?.userLevel === 1 
          ? (id: string) => deleteHandler(id) 
          : null;   

        return (
          <PostCard 
            key={post._id} 
            post={post} 
            onUpdate={onUpdate} 
            onDelete={onDelete}
            isMyPost={isMyPost}
          />
        )
      })}

      <PostUpdateModal 
        key={currentId}
        isOpen={modalActive} 
        title={currentTitle} 
        content={currentContent} 
        postId={currentId} 
        onClose={modalClear}
        onSave={(data: iUpdatedFiels)  => updateSaveHandler(data)}
      />
    </>
  )
}
