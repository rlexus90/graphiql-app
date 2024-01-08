import { it, expect } from 'vitest';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import ProtectedPage from '../../component/ProtectedPage/ProtectedPage';
import Main from '../Main/Main';
import About from '../About/About';
import Login from '../Login/Login';
import SignUp from '../SignUP/SignUp';
import NotFound from './NotFound';
import { setupStore } from '../../store/store';
import { Provider } from 'react-redux';

const store = setupStore();

it('test No found', async () => {
  const rote = createMemoryRouter(
    [
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
    ],
    {
      initialEntries: ['/wrong'],
    }
  );

  render(
    <Provider store={store}>
      <RouterProvider router={rote} />
    </Provider>
  );
  const text = await screen.findByText('Sorry... Page not found');
  expect(text).toBeInTheDocument();
});
