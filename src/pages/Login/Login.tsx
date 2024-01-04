import { FC, useState } from 'react';
import { Header } from '../../component/Header/Header';
import { ILoginForm } from '../../types/formTypes';
import { SubmitHandler, useForm } from 'react-hook-form';
import style from './Login.module.scss';
import { setupLoginSchema } from '../../controlers/validation/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useActions, useAppSelector } from '../../store/hook/hook';
import { Link, useNavigate } from 'react-router-dom';
import { IUser } from '../../types/user';
import { ILang } from '../../types/localisation';
import clsx from 'clsx';

export const Login: FC = () => {
  const { setUserStore, delUserStore } = useActions();
  const { auth } = useAppSelector((store) => store.firebaseSlice);
  const { language } = useAppSelector((store) => store.changeLang);
  const { isLogin } = useAppSelector((store) => store.authSlice);
  const [errorMsg, setErrorMsg] = useState('');
  const schema = setupLoginSchema(language);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ILoginForm>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
    const { email, password } = data;
    data &&
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user as unknown as IUser;
          setUserStore({
            email: user.email,
            uid: user.uid,
            accessToken: user.accessToken,
          });
          navigate('/main');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          setErrorMsg(errorMessage);
        });
  };

  const logout = () => {
    delUserStore();
  };

  return (
    <>
      <Header />

      {isLogin ? (
        <>
          <div className={style.wrapper}>
            <h1>{text[language].exit}</h1>
            <input
              type="button"
              onClick={logout}
              className={clsx({ [style.submit]: true, [style.valid]: true })}
              value={text[language].exit_btn}
            />
          </div>
        </>
      ) : (
        <div className={style.wrapper}>
          <h1>{text[language].signIn}</h1>
          <Link to="/signup">{text[language].have_acc}</Link>
          {errorMsg && <p>{errorMsg}</p>}
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <div className={style.group}>
              <input type="email" id="Email" required {...register('email')} />
              <label htmlFor="Email">{text[language].email}</label>
            </div>
            {errors.email && (
              <p className={style.error_mesage}>{errors.email.message}</p>
            )}
            <div className={style.group}>
              <input
                type="password"
                id="Password"
                required
                {...register('password')}
              />
              <label htmlFor="Password">{text[language].pass}</label>
            </div>
            {errors.password && (
              <p className={style.error_mesage}>{errors.password.message}</p>
            )}
            <input
              type="submit"
              className={clsx({ [style.submit]: true, [style.valid]: isValid })}
              value={text[language].comfirm}
            />
          </form>
        </div>
      )}
    </>
  );
};

const text: ILang = {
  Ua: {
    signIn: 'Увійти до аккаунту',
    have_acc: 'В мене відсутній аккаунт',
    email: 'Пошта',
    pass: 'Пароль',
    comfirm: 'Увійти',
    exit: 'Ви дійсно хочете вийти?',
    exit_btn: 'Вийти',
  },
  En: {
    signIn: 'Login',
    have_acc: 'Have not acount?',
    email: 'Email',
    pass: 'Password',
    comfirm: 'Login',
    exit: 'You really want exit?',
    exit_btn: 'Logout',
  },
};
