import { it, expect } from 'vitest';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

it('test App', async () => {
  render(<App />);
  const main = await screen.findByText('main work');

  expect(main).toBeInTheDocument();
});
