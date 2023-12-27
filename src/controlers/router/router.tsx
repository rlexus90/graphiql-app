import { createBrowserRouter } from 'react-router-dom';
import NotFound from '../../pages/NotFound/NotFound';
import { Main } from '../../pages/Main/Main';
import { Login } from '../../pages/Login/Login';
import { ProtectedPage } from '../../component/ProtectedPage/ProtectedPage';

const router = createBrowserRouter([
  { path: '/', element: <ProtectedPage><Main/></ProtectedPage> },
	{path:'/login',element:<Login/>},
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
