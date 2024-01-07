import { FC, useEffect, useState } from 'react';
import getGraphyqlSchema from '../../helpers/buildSchema';
import CodeMirror from '@uiw/react-codemirror';
import { ILang } from '../../types/localisation';
import { useAppSelector } from '../../store/hook/hook';

type Props = {
  width: number;
};

const Docs: FC<Props> = ({ width }) => {
  const lang = useAppSelector((store) => store.changeLang.language);
  const [dock, setDocs] = useState('');

  const greateDocs = async () => {
    setDocs(await getGraphyqlSchema());
  };

  useEffect(() => {
    greateDocs();
  }, []);

  return (
    <>
      <h1
        style={{ fontSize: '2em', textAlign: 'center', paddingBottom: '5px' }}
      >
        {text[lang].name}
      </h1>
      <CodeMirror value={dock} width={`${width}px`} height="80vh" readOnly />
    </>
  );
};

export default Docs;

const text: ILang = {
  Ua: {
    name: 'Graphyql Схема',
  },
  En: {
    name: 'Graphyql Schema',
  },
};
