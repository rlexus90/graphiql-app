import { IUser } from '../types/user';
import Cookies from 'js-cookie';

export const setUser = (user: IUser): void => {
  Cookies.set('user', JSON.stringify(user), { expires: 1 / 24 });
};

export const setUserThreeDay = (user: IUser): void => {
  Cookies.set('user', JSON.stringify(user), { expires: 3 });
};

export const getUser = (): IUser | undefined => {
  const user = Cookies.get('user');
  return user && JSON.parse(user);
};

export const delUser = () => {
  Cookies.remove('user');
};
