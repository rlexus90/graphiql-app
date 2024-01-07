import { Dispatch, FC, useEffect, useRef, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { sendRequest } from '../../controlers/requestApi/requestAPI';
import { useAppSelector } from '../../store/hook/hook';
import clsx from 'clsx';
import style from './RequestEditor.module.scss';
import { prettieStr } from '../../helpers/prettieStr';
import { ILang } from '../../types/localisation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faBroom,
  faFloppyDisk,
  faBook,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import {
  EXAMPLE_HEADERS,
  EXAMPLE_QUERY,
  EXAMPLE_VARIABLES,
} from '../../common/constants';
import FormDialog from '../Dialog/Dialog';

type Props = {
  setResp: Dispatch<string>;
  width: number;
  docsVisible: boolean;
  setDocsVisible: Dispatch<boolean>;
};

const RequestEditorComponent: FC<Props> = ({
  setResp,
  width,
  docsVisible,
  setDocsVisible,
}) => {
  const lang = useAppSelector((store) => store.changeLang.language);
  const [query, setQuery] = useState('');
  const [variables, setVariables] = useState('');
  const [headers, setHeaders] = useState('');
  const [isValiables, setIsValiables] = useState(true);
  const [mainEditorHeight, setMainEditorHeight] = useState<number>();
  const [isSecondEdit, setIsSecondEdit] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const WH = window.innerHeight;
    const labelHeight = ref.current ? ref.current.clientHeight : 0;
    setMainEditorHeight((WH * 80) / 100 - labelHeight);
    if (isSecondEdit)
      setMainEditorHeight((WH * 80) / 100 - (WH * 20) / 100 - labelHeight);
  }, [isSecondEdit]);

  const showSecondEdit = () => {
    setIsSecondEdit(true);
  };

  const togleSecondEdit = () => {
    setIsSecondEdit(!isSecondEdit);
  };
  const togleDocs = () => {
    setDocsVisible(!docsVisible);
  };

  const send = async () => {
    const respAnswer = await sendRequest(query, variables, headers);
    setResp(JSON.stringify(respAnswer, null, 2));
  };

  const prettieQuery = () => {
    setQuery(prettieStr(query));
  };

  const changeEndpoint = () => {
    setOpenDialog(true);
  };

  const fillExample = () => {
    setQuery(EXAMPLE_QUERY);
    setVariables(EXAMPLE_VARIABLES);
    setHeaders(EXAMPLE_HEADERS);
  };

  return (
    <>
      {openDialog && <FormDialog setOpen={setOpenDialog} />}
      <div className={style.wrapper}>
        <div>
          <h1>{text[lang].editor}</h1>
          <CodeMirror
            value={query}
            onChange={(e) => setQuery(e)}
            width={`${width}px`}
            height={`${mainEditorHeight}px`}
          />
          <p ref={ref} className={style.props}>
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
        <ul className={style.icons}>
          <li title={text[lang].send} onClick={send}>
            <FontAwesomeIcon icon={faPlay} />
          </li>
          <li title={text[lang].prettie} onClick={prettieQuery}>
            <FontAwesomeIcon icon={faBroom} />
          </li>
          <li title={text[lang].example} onClick={fillExample}>
            <FontAwesomeIcon icon={faFloppyDisk} />
          </li>
          <li title={text[lang].docs} onClick={togleDocs}>
            <FontAwesomeIcon icon={faBook} />
          </li>
          <li title={text[lang].reqPoint} onClick={changeEndpoint}>
            <FontAwesomeIcon icon={faGlobe} />
          </li>
        </ul>
      </div>
    </>
  );
};

export default RequestEditorComponent;

const text: ILang = {
  Ua: {
    variables: 'Змінні',
    headers: 'Заголовки',
    send: 'Відправити запит',
    prettie: 'Прикрасити',
    example: 'Приклад коду',
    docs: 'Показати документацію',
    reqPoint: 'Змінити кінцеву точку',
    editor: 'Редактор запитів',
  },
  En: {
    variables: 'Variables',
    headers: 'Headers',
    send: 'Send request',
    prettie: 'Pretiie',
    example: 'Example code',
    docs: 'Show docs',
    reqPoint: 'Change endpoint',
    editor: 'Request editor',
  },
};
