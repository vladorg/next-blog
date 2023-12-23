import { LogoutView } from "@/components/pagesViews/LogoutView";
import { AuthorizedOnly } from "@/components/providers/AuthorizedOnly";

const LogoutPage = async () => {
  
  return (
    <AuthorizedOnly>
      <LogoutView />
    </AuthorizedOnly>
  )
}

export default LogoutPage;
