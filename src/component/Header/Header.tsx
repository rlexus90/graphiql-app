import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useActions, useAppSelector } from '../../store/hook/hook';
import { ILang } from '../../types/localisation';

export const Header: FC = () => {
  const lang = useAppSelector((store) => store.changeLang.language);
  const { changeLang } = useActions();

  return (
    <>
      <header>
        <div className="wrapper">
          <nav>
            <ul>
              <li>
                <NavLink to="/about">{text[lang].about}</NavLink>
              </li>
              <li>
                <NavLink to="/login">{text[lang].signIn}</NavLink>
              </li>
              <li>
                <NavLink to="/">{text[lang].main}</NavLink>
              </li>
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
  },
  En: {
    main: 'Main',
    about: 'About us',
    signIn: 'Sign in',
    logout: 'Logout',
  },
};
