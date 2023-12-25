import { SpinLoader } from "@/components/loaders/SpinLoader";
import { MembersSkeleton } from "@/components/skeletons/MembersSkeleton";

const LoadingMembers = () => (
  <>
    <MembersSkeleton />
    <SpinLoader />
  </>   
)

export default LoadingMembers;
