import { FC, Suspense, useEffect, useState } from 'react';
import Header from '../../component/Header/Header';
import Loader from '../../component/Loader/Loader';
import { Docs, Response, RequestEditor } from '../../common/lazyImports';
import style from './main.module.scss';
import { returnSizeEditor } from '../../helpers/windowResize';
import Footer from '../../component/Footer/Footer';

const Main: FC = () => {
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

  return (
    <>
      <Header />

      <div className={style.wrapper}>
        {docsVisible && (
          <div className={style.editor}>
            <Suspense fallback={<Loader />}>
              <Docs width={width} />
            </Suspense>
          </div>
        )}
        <div data-testid="codeEditor" className={style.editor}>
          <Suspense fallback={<Loader />}>
            <RequestEditor
              setResp={setResp}
              width={width}
              docsVisible={docsVisible}
              setDocsVisible={setDocsVisible}
            />
          </Suspense>
        </div>

        <div className={style.editor}>
          <Suspense fallback={<Loader />}>
            <Response value={resp} width={width} />
          </Suspense>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
