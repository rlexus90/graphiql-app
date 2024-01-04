import { FC, Suspense } from 'react';
import { useAppSelector } from '../../store/hook/hook';
import { ILang } from '../../types/localisation';
import { Header } from '../../component/Header/Header';
import { EditorComponent } from '../../component/EditorComponent/EditorComponent';

export const Main: FC = () => {
  const lang = useAppSelector((store) => store.changeLang.language);

  return (
    <>
      <Header />
      {text[lang].main + lang}
      <Suspense>
        <EditorComponent />
      </Suspense>
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
