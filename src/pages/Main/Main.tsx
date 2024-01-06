import { FC, Suspense, useState } from 'react';
import { useAppSelector } from '../../store/hook/hook';
import { ILang } from '../../types/localisation';
import Header from '../../component/Header/Header';
import Loader from '../../component/Loader/Loader';
import { EditorComponent } from '../../common/lazyImports';
import axios from 'axios';
import style from './main.module.scss';

const endpoint = 'https://countries.trevorblades.com/graphql';

const headers = { 'Content-Type': 'application/json' };

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

  const clickHandle = async () => {
    const val = JSON.stringify(query).replace(/\\n/g, '').replace(/\\t/g, '');
    console.log(val);

    const grafQlQvery = {
      operationName: 'Query',
      query,
      variables: {},
    };

    // const resp = await axios.post(endpoint, grafQlQvery, {
    // 	headers
    // })

    const resp = await axios({
      url: endpoint,
      method: 'post',
      data: grafQlQvery,
      headers,
    });

    setResp(JSON.stringify(resp.data));
    console.log(resp.data);
  };

  return (
    <>
      <Header />
      {text[lang].main + lang}

      <div className="wrapper">
        <div className="left_side"></div>
        <div className={style.code_editor}>
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
