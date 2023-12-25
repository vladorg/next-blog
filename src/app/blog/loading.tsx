import { SpinLoader } from "@/components/loaders/SpinLoader";
import { BlogSkeleton } from "@/components/skeletons/BlogSkeleton";

const LoadingBlog = () => (
  <>
    <BlogSkeleton />
    <SpinLoader />
  </>   
)

export default LoadingBlog;
