import { createBrowserRouter } from 'react-router-dom';
import NotFound from '../../pages/NotFound/NotFound';
import { Main } from '../../pages/Main/Main';

const router = createBrowserRouter([
  { path: '/', element: <Main /> },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
