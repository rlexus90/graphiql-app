import { FC, useEffect, useState } from 'react';
import EditorComponent from '../EditorComponent/EditorComponent';
import getGraphyqlSchema from '../../helpers/buildSchema';

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
      <EditorComponent value={dock} width={width} />
    </>
  );
};

export default Docs;
