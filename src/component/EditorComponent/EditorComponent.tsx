import { Dispatch, FC } from 'react';
import CodeMirror from '@uiw/react-codemirror';

type Props = {
  value: string;
  setValue?: Dispatch<string>;
  width: number;
};

const EditorComponent: FC<Props> = ({ value, setValue, width }) => {
  return (
    <>
      <CodeMirror
        value={value}
        onChange={(e) => setValue && setValue(e)}
        width={`${width}px`}
        height="70vh"
      />
    </>
  );
};

export default EditorComponent;
