import { FC } from 'react';
import { Header } from '../../component/Header/Header';
import { ILoginForm } from '../../types/formTypes';
import { SubmitHandler, useForm } from 'react-hook-form';
import style from './Login.module.scss';
import { setupLoginSchema } from '../../controlers/validation/schema';
import { yupResolver } from '@hookform/resolvers/yup';

export const Login: FC = () => {
  const schema = setupLoginSchema();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
    console.log(data);
  };

  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className={style.group}>
            <input type="email" id="Email" required {...register('email')} />
            <label htmlFor="Email">Email</label>
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
            <label htmlFor="Password">Password</label>
          </div>
          {errors.password && (
            <p className={style.error_mesage}>{errors.password.message}</p>
          )}
          <input
            type="submit"
            className={style.submit}
            value={'Comfirm form'}
          />
        </form>
      </div>
    </>
  );
};
