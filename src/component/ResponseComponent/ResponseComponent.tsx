import { FC } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { useAppSelector } from '../../store/hook/hook';
import { ILang } from '../../types/localisation';

type Props = {
  value: string;
  width: number;
};

const ResponseComponent: FC<Props> = ({ value, width }) => {
  const lang = useAppSelector((store) => store.changeLang.language);
  return (
    <>
      <h1
        style={{ fontSize: '2em', textAlign: 'center', paddingBottom: '5px' }}
      >
        {text[lang].name}
      </h1>
      <CodeMirror value={value} width={`${width}px`} height="80vh" readOnly />
    </>
  );
};

export default ResponseComponent;

const text: ILang = {
  Ua: {
    name: 'Відповідь з сервера',
  },
  En: {
    name: 'Server answer',
  },
};
