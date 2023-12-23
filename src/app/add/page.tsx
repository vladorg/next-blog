import { AddView } from '@/components/pagesViews/AddView';
import { AuthorizedOnly } from '@/components/providers/AuthorizedOnly';

const AddPage = () => {

  return (
    <AuthorizedOnly>
      <AddView />
    </AuthorizedOnly>
  )
}

export default AddPage;
