import { render } from '@testing-library/react';
import App from '../App';

export const renderApp = () => {
  const div = document.createElement('div');
  const renderProvider = <App />;
  return {
    ...render(renderProvider, { container: document.body.appendChild(div) }),
  };
};
