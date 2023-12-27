import { FC,PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

export const ProtectedPage:FC<PropsWithChildren> = ({children})=>{

const isLogin = false;
	return <>
	{isLogin?children:<Navigate to={'/login'}/>}
	</>
}