import { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hook/hook';

const ProtectedPage: FC<PropsWithChildren> = ({ children }) => {
  const { isLogin } = useAppSelector((store) => store.authSlice);
  return <>{isLogin ? children : <Navigate to={'/login'} />}</>;
};

export default ProtectedPage;
