import { Dispatch, FC, useEffect, useRef, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { sendRequest } from '../../controlers/requestApi/requestAPI';
import { useAppSelector } from '../../store/hook/hook';
import clsx from 'clsx';
import style from './RequestEditor.module.scss';
import { prettieStr } from '../../helpers/prettieStr';
import { ILang } from '../../types/localisation';

type Props = {
  setResp: Dispatch<string>;
  width: number;
};

const goLang = `query Query {  continents {
    name
    code
    countries {
      name
    }
  }
}`;

const RequestEditorComponent: FC<Props> = ({ setResp, width }) => {
  const lang = useAppSelector((store) => store.changeLang.language);
  const [query, setQuery] = useState(goLang);
  const [variables, setVariables] = useState('');
  const [headers, setHeaders] = useState('');
  const [isValiables, setIsValiables] = useState(true);
  const [mainEditorHeight, setMainEditorHeight] = useState<number>();
  const [isSecondEdit, setIsSecondEdit] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const WH = window.innerHeight;
    const labelHeight = ref.current ? ref.current.clientHeight : 0;
    setMainEditorHeight((WH * 70) / 100 - labelHeight);
    if (isSecondEdit)
      setMainEditorHeight((WH * 70) / 100 - (WH * 20) / 100 - labelHeight);
  }, [isSecondEdit]);

  const showSecondEdit = () => {
    setIsSecondEdit(true);
  };

  const togleSecondEdit = () => {
    setIsSecondEdit(!isSecondEdit);
  };

  const send = async () => {
    const respAnswer = await sendRequest(query, variables, headers);
    setResp(JSON.stringify(respAnswer, null, 2));
  };

  const prettieQuery = () => {
    setQuery(prettieStr(query));
  };

  return (
    <>
      <div className={style.wrapper}>
        <CodeMirror
          value={query}
          onChange={(e) => setQuery(e)}
          width={`${width}px`}
          height={`${mainEditorHeight}px`}
        />
        <p ref={ref}>
          <span
            onClick={() => {
              setIsValiables(true);
              showSecondEdit();
            }}
            className={clsx({ [style.active]: isValiables })}
          >
            {text[lang].variables}
          </span>
          <span
            onClick={() => {
              setIsValiables(false);
              showSecondEdit();
            }}
            className={clsx({ [style.active]: !isValiables })}
          >
            {text[lang].headers}
          </span>
          <span onClick={togleSecondEdit}>{isSecondEdit ? `∨` : '∧'}</span>
        </p>
        {isSecondEdit && isValiables && (
          <CodeMirror
            value={variables}
            onChange={(e) => setVariables(e)}
            width={`${width}px`}
            height="20vh"
          />
        )}
        {isSecondEdit && !isValiables && (
          <CodeMirror
            value={headers}
            onChange={(e) => setHeaders(e)}
            width={`${width}px`}
            height="20vh"
          />
        )}
      </div>
      <button onClick={send}>send</button>
      <button onClick={prettieQuery}>Pretite</button>
    </>
  );
};

export default RequestEditorComponent;

const text: ILang = {
  Ua: {
    variables: 'Variables',
    headers: 'Headers',
  },
  En: {
    variables: 'Variables',
    headers: 'Headers',
  },
};
