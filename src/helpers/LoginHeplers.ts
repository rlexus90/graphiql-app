import { IUser } from '../types/user';

export const setUser = (user: IUser): void => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const getUser = (): IUser | undefined => {
  const user = localStorage.getItem('user');
  return user && JSON.parse(user);
};
