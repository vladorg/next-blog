import RegisterView from "@/components/pagesViews/RegisterView";
import { UnAuthorizedOnly } from "@/components/providers/UnAuthorizedOnly";

const RegisterPage = () => {

  return (
    <UnAuthorizedOnly toPath="/">
      <RegisterView />
    </UnAuthorizedOnly>
  )
}

export default RegisterPage
