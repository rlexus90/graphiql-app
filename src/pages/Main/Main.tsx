import { FC } from 'react';
import { useAppSelector } from '../../store/hook/hook';
import { ILang } from '../../types/localisation';
import { Header } from '../../component/Header/Header';

export const Main: FC = () => {
  const lang = useAppSelector((store) => store.changeLang.language);

  return (
    <>
      <Header />
      {text[lang].main + lang}
    </>
  );
};

const text: ILang = {
  Ua: {
    main: 'Головна працює',
  },
  En: {
    main: 'Main work',
  },
};
