import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useActions, useAppSelector } from '../../store/hook/hook';
import { getUser } from '../../helpers/LoginHeplers';

const ProtectedPage: FC<PropsWithChildren> = ({ children }) => {
  const { setIsLogin } = useActions();
  const { isLogin } = useAppSelector((store) => store.authSlice);
  setIsLogin(Boolean(getUser()));

  return <>{isLogin ? children : <Navigate to={'/login'} />}</>;
};

export default ProtectedPage;
