import { Dispatch, FC } from 'react';
import CodeMirror from '@uiw/react-codemirror';

type Props = {
  value: string;
  setValue?: Dispatch<string>;
};

const EditorComponent: FC<Props> = ({ value, setValue }) => {
  return (
    <>
      <CodeMirror
        value={value}
        onChange={(e) => setValue && setValue(e)}
        width="300px"
        height="70vh"
      />
    </>
  );
};

export default EditorComponent;
