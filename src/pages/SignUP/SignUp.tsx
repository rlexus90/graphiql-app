import { FC, useState } from 'react';
import Header from '../../component/Header/Header';
import { ISignUpForm } from '../../types/formTypes';
import { SubmitHandler, useForm } from 'react-hook-form';
import style from '../Login/Login.module.scss';
import { setupSignUpSchema } from '../../controlers/validation/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useActions, useAppSelector } from '../../store/hook/hook';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { IUser } from '../../types/user';
import { ILang } from '../../types/localisation';
import clsx from 'clsx';
import Footer from '../../component/Footer/Footer';
import Alert from 'react-popup-alert';

const SignUp: FC = () => {
  const { setUserStore } = useActions();
  const { auth } = useAppSelector((store) => store.firebaseSlice);
  const { language } = useAppSelector((store) => store.changeLang);
  const { isLogin } = useAppSelector((store) => store.authSlice);
  const [errorMsg, setErrorMsg] = useState('');
  const schema = setupSignUpSchema(language);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ISignUpForm>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const onSubmit: SubmitHandler<ISignUpForm> = async (data) => {
    const { email, password1 } = data;
    data &&
      createUserWithEmailAndPassword(auth, email, password1)
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

  return (
    <>
      <Header />

      {isLogin ? (
        <Navigate to={'/login'} />
      ) : (
        <div className={style.wrapper}>
          <h1>{text[language].signUp}</h1>
          <Link to="/login">{text[language].have_acc}</Link>
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
                id="Password1"
                required
                {...register('password1')}
              />
              <label htmlFor="Password1">{text[language].pass}</label>
            </div>
            {errors.password1 && (
              <p className={style.error_mesage}>{errors.password1.message}</p>
            )}
            <div className={style.group}>
              <input
                type="password"
                id="Password2"
                required
                {...register('password2')}
              />
              <label htmlFor="Password2">{text[language].pass}</label>
            </div>
            {errors.password2 && (
              <p className={style.error_mesage}>{errors.password2.message}</p>
            )}
            <input
              type="submit"
              className={clsx({ [style.submit]: true, [style.valid]: isValid })}
              value={text[language].comfirm}
            />
          </form>
        </div>
      )}
      {errorMsg && (
        <div className={style.alert_wrapper}>
          <div className={style.alert}>
            <Alert
              btnText={text[language].close}
              text={errorMsg}
              type="error"
              show={Boolean(errorMsg)}
              onClosePress={() => setErrorMsg('')}
              pressCloseOnOutsideClick={true}
              showBorderBottom={true}
            />
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default SignUp;

const text: ILang = {
  Ua: {
    signUp: 'Зареєструватися',
    have_acc: 'В мене вже є аккаунт',
    email: 'Пошта',
    pass: 'Пароль',
    comfirm: 'Зареєструватися',
    close: 'Закрити',
  },
  En: {
    signUp: 'Sign Up',
    have_acc: 'I have account',
    email: 'Email',
    pass: 'Password',
    comfirm: 'Sign Up',
    close: 'Close',
  },
};
