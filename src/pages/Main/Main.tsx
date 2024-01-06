import { FC, Suspense, useState } from 'react';
import { useAppSelector } from '../../store/hook/hook';
import { ILang } from '../../types/localisation';
import Header from '../../component/Header/Header';
import Loader from '../../component/Loader/Loader';
import { Docs, EditorComponent } from '../../common/lazyImports';
import style from './main.module.scss';
import { sendRequest } from '../../controlers/requestApi/requestAPI';

const goLang = `query Query {
  continents {
    name
    code
    countries {
      name
    }
  }
}`;

const Main: FC = () => {
  const lang = useAppSelector((store) => store.changeLang.language);
  const [query, setQuery] = useState(goLang);
  const [resp, setResp] = useState('');
  const [docsVisible, setDocsVisible] = useState(false);

  const clickHandle = async () => {
    const val = JSON.stringify(query).replace(/\\n/g, '').replace(/\\t/g, '');
    console.log(val);

    const resp = await sendRequest(query);

    setResp(JSON.stringify(resp));
    console.log(resp);

    setDocsVisible(!docsVisible);
  };

  return (
    <>
      <Header />
      {text[lang].main + lang}

      <div className="wrapper">
        <div className="left_side"></div>
        <div className={style.code_editor}>
          {docsVisible && (
            <Suspense fallback={<Loader />}>
              <Docs />
            </Suspense>
          )}
          <Suspense fallback={<Loader />}>
            <EditorComponent value={query} setValue={setQuery} />
          </Suspense>

          <Suspense fallback={<Loader />}>
            <EditorComponent value={resp} />
          </Suspense>
          <button onClick={clickHandle}>Click</button>
        </div>
      </div>
    </>
  );
};

export default Main;

const text: ILang = {
  Ua: {
    main: 'Головна працює',
  },
  En: {
    main: 'Main work',
  },
};
