import { FC, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useActions, useAppSelector } from '../../store/hook/hook';
import { ILang } from '../../types/localisation';
import clsx from 'clsx';
import style from './Header.module.scss';

const Header: FC = () => {
  const lang = useAppSelector((store) => store.changeLang.language);
  const { changeLang } = useActions();
  const isLogin = useAppSelector((store) => store.authSlice.isLogin);
  const [stiky, setStiky] = useState(false);

  const stikyHeader = () => {
    const currentScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (currentScroll > 20) setStiky(true);
    if (currentScroll == 0) setStiky(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', stikyHeader);

    return () => window.removeEventListener('scroll', stikyHeader);
  }, []);

  return (
    <>
      <header className={clsx({ [style.header_stiky]: stiky })}>
        <div
          className={clsx({ [style.wrapper]: !stiky, [style.stiky]: stiky })}
        >
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

export default Header;

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
