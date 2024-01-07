import { FC } from 'react';
import CodeMirror from '@uiw/react-codemirror';

type Props = {
  value: string;
  width: number;
};

const ResponseComponent: FC<Props> = ({ value, width }) => {
  return (
    <>
      <CodeMirror value={value} width={`${width}px`} height="70vh" readOnly />
    </>
  );
};

export default ResponseComponent;
