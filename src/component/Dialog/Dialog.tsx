import { Dispatch, FC, useState } from 'react';
import style from './Dialog.module.scss';
import { useAppSelector } from '../../store/hook/hook';
import { ILang } from '../../types/localisation';
import { delEndpoint, setEndpoint } from '../../helpers/endpointSet';

type Props = {
  setOpen: Dispatch<boolean>;
};

const FormDialog: FC<Props> = ({ setOpen }) => {
  const lang = useAppSelector((store) => store.changeLang.language);
  const [endpointStr, setEndpointStr] = useState('');

  const closeDialog = () => {
    setOpen(false);
  };

  const setDefault = () => {
    delEndpoint();
    setOpen(false);
  };

  const changeEndpoint = () => {
    setEndpoint(endpointStr);
    setOpen(false);
  };

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.group}>
          <input
            type="text"
            id="Endpoint"
            required
            value={endpointStr}
            onChange={(e) => setEndpointStr(e.target.value)}
          />
          <label htmlFor="Endpoint">{text[lang].endpoint}</label>
        </div>

        <div className={style.btn}>
          <input
            type="button"
            className={style.submit}
            value={text[lang].cancel}
            onClick={closeDialog}
          />
          <input
            type="button"
            className={style.submit}
            value={text[lang].ok}
            onClick={changeEndpoint}
          />
        </div>
        <input
          type="button"
          className={style.submit}
          style={{ width: '400px' }}
          value={text[lang].default}
          onClick={setDefault}
        />
      </div>
    </>
  );
};

export default FormDialog;

const text: ILang = {
  Ua: {
    ask: 'Змінити кінцеву точку?',
    ok: 'Змінити',
    default: 'Встановити стандартну',
    endpoint: 'Кінцева точка',
    cancel: 'Відміна',
  },
  En: {
    ask: 'Change endpoint?',
    ok: 'Change',
    default: 'Set default',
    endpoint: 'Endpoint',
    cancel: 'Cancel',
  },
};
