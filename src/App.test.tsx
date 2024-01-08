import { it, expect } from 'vitest';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderApp } from './helpers/renderApp';
import userEvent from '@testing-library/user-event';

it('test About Page', async () => {
  renderApp();
  const main = await screen.findAllByTestId('about-page');
  expect(main).not.toBe(null);
});

it('test Navigation', async () => {
  renderApp();
  const about = await screen.findAllByTestId('about-page');
  expect(about).not.toBe(null);
  const signIn = await screen.findByText('Sign in');
  await userEvent.click(signIn);
  const text = await screen.findByTestId('login');
  expect(text).toBeInTheDocument();
  const signUp = await screen.findByText('Sign up');
  await userEvent.click(signUp);
  const text2 = await screen.findByTestId('signUp');
  expect(text2).toBeInTheDocument();
});

it('Test Auth', async () => {
  renderApp();
  const signIn = await screen.findByText('Sign in');
  await userEvent.click(signIn);
  const email = screen.getByTestId('email');
  await userEvent.type(email, 'rlexus90@gmail.com');
  const pass = await screen.getByTestId('password');
  await userEvent.type(pass, 'Q!1qwerty');
  const submit = screen.getByTestId('submit');
  await userEvent.click(submit);

  const main = await screen.findByTestId('codeEditor');
  expect(main).toBeInTheDocument();
});
