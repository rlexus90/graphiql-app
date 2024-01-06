import { createBrowserRouter } from 'react-router-dom';
import NotFound from '../../pages/NotFound/NotFound';
import Main from '../../pages/Main/Main';
import Login from '../../pages/Login/Login';
import ProtectedPage from '../../component/ProtectedPage/ProtectedPage';
import SignUp from '../../pages/SignUP/SignUp';
import About from '../../pages/About/About';

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
    element: <About />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
