import { createBrowserRouter } from 'react-router-dom';
import NotFound from '../../pages/NotFound/NotFound';
import Main from '../../pages/Main/Main';
import Login from '../../pages/Login/Login';
import ProtectedPage from '../../component/ProtectedPage/ProtectedPage';
import SignUp from '../../pages/SignUP/SignUp';

import { Suspense } from 'react';
import Loader from '../../component/Loader/Loader';
import { About } from '../../lazyImports';

const router = createBrowserRouter([
  {
    path: '/main',
    element: (
      <ProtectedPage>
        <Main />
      </ProtectedPage>
    ),
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path: '/',
    element: (
      <Suspense fallback={<Loader />}>
        <About />
      </Suspense>
    ),
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
