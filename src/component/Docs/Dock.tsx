import { FC, useEffect, useState } from 'react';
import getGraphyqlSchema from '../../helpers/buildSchema';
import CodeMirror from '@uiw/react-codemirror';

type Props = {
  width: number;
};

const Docs: FC<Props> = ({ width }) => {
  const [dock, setDocs] = useState('');

  const greateDocs = async () => {
    setDocs(await getGraphyqlSchema());
  };

  useEffect(() => {
    greateDocs();
  }, []);

  return (
    <>
      <CodeMirror value={dock} width={`${width}px`} height="70vh" />
    </>
  );
};

export default Docs;
