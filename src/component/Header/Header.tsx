import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useActions, useAppSelector } from '../../store/hook/hook';
import { ILang } from '../../types/localisation';
import style from './Header.module.scss';

export const Header: FC = () => {
  const lang = useAppSelector((store) => store.changeLang.language);
  const { changeLang } = useActions();
  const isLogin = useAppSelector((store) => store.authSlice.isLogin);

  return (
    <>
      <header>
        <div className={style.wrapper}>
          <nav className={style.nav}>
            <ul>
              <li>
                <NavLink to="/">{text[lang].about}</NavLink>
              </li>
              <li>
                <NavLink to="/login">
                  {isLogin ? text[lang].logout : text[lang].signIn}
                </NavLink>
              </li>
              {isLogin ? (
                <li>
                  <NavLink to="/main">{text[lang].main}</NavLink>
                </li>
              ) : (
                <li>
                  <NavLink to="/signup">{text[lang].signUp}</NavLink>
                </li>
              )}
              <li
                onClick={() => {
                  changeLang();
                }}
              >
                En/Ua
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

const text: ILang = {
  Ua: {
    main: 'Головна',
    about: 'Про нас',
    signIn: 'Увійти',
    logout: 'Вийти',
    signUp: 'Зареєструватись',
  },
  En: {
    main: 'Main',
    about: 'About us',
    signIn: 'Sign in',
    logout: 'Logout',
    signUp: 'Sign up',
  },
};
