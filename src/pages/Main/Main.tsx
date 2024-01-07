import { FC, Suspense, useEffect, useState } from 'react';
import { useAppSelector } from '../../store/hook/hook';
import { ILang } from '../../types/localisation';
import Header from '../../component/Header/Header';
import Loader from '../../component/Loader/Loader';
import { Docs, Response, RequestEditor } from '../../common/lazyImports';
import style from './main.module.scss';
import { returnSizeEditor } from '../../helpers/windowResize';

const Main: FC = () => {
  const lang = useAppSelector((store) => store.changeLang.language);

  const [resp, setResp] = useState('');
  const [docsVisible, setDocsVisible] = useState(false);
  const [width, setWidth] = useState<number>(returnSizeEditor(false));
  const [windowWinth, setWindowWidth] = useState(window.innerWidth);

  const changeWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', changeWidth);
    return () => window.removeEventListener('resize', changeWidth);
  }, []);

  useEffect(() => {
    setWidth(returnSizeEditor(docsVisible));
  }, [docsVisible, windowWinth]);

  const clickHandle = async () => {
    // const val = JSON.stringify(query).replace(/\\n/g, '').replace(/\\t/g, '');
    // console.log(val);
    setDocsVisible(!docsVisible);
  };

  return (
    <>
      <Header />
      {text[lang].main + lang}
      {width}
      <div className="wrapper">
        <div className="left_side"></div>
        <div className={style.code_editor}>
          {docsVisible && (
            <Suspense fallback={<Loader />}>
              <Docs width={width} />
            </Suspense>
          )}
          <Suspense fallback={<Loader />}>
            <RequestEditor setResp={setResp} width={width} />
          </Suspense>

          <Suspense fallback={<Loader />}>
            <Response value={resp} width={width} />
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
