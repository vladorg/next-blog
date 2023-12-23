import { SigninView } from "@/components/pagesViews/SigninView"
import { UnAuthorizedOnly } from "@/components/providers/UnAuthorizedOnly";

const SigninPage = () => {

  return (
    <UnAuthorizedOnly toPath="/">
      <SigninView /> 
    </UnAuthorizedOnly>
  )
}

export default SigninPage;
