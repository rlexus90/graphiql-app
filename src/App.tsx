import { Provider } from 'react-redux';
import './App.scss';
import { setupStore } from './store/store';
import { RouterProvider } from 'react-router-dom';
import router from './controlers/router/router';

const store = setupStore({ changeLang: { language: 'En' } });

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </>
  );
}

export default App;
