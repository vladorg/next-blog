import { getUserInfoAction } from "@/actions/user/getUserInfoAction";
import { iPostCard } from "@/types";

export const useCardAuthorInfo = async (posts: iPostCard[]): Promise<iPostCard[]> => {
  try {
    if (!posts.length) {
      return posts;
    }
  
    for(let post of posts) {
      const { authorId } = post;
      post.authorInfo = {};
  
      const { user } = await getUserInfoAction(authorId);       
      
      if (user) {
        const { name, role, photo } = user;
        post.authorInfo.name = name;
        post.authorInfo.role = role;
        post.authorInfo.photo = photo;
      } else {
        post.authorInfo.name = '<deleted user>';
        post.authorInfo.role = '';
        post.authorInfo.photo = '';
      }
    }
  
    return posts;
  } catch(err) {
    console.log(err);
    
    return posts    
  }
}
