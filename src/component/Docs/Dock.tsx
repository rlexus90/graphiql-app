import { FC, useEffect, useState } from 'react';
import EditorComponent from '../EditorComponent/EditorComponent';
import getGraphyqlSchema from '../../helpers/buildSchema';

const Docs: FC = () => {
  const [dock, setDocs] = useState('');

  const greateDocs = async () => {
    setDocs(await getGraphyqlSchema());
  };

  useEffect(() => {
    greateDocs();
  }, []);

  return (
    <>
      <EditorComponent value={dock} />
    </>
  );
};

export default Docs;
