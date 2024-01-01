import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '../store';
import { respParamSlice } from '../slices/RespParam';
import { changeLangSlice } from '../slices/ChangeLang';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(
    { ...respParamSlice.actions, ...changeLangSlice.actions }, //todo
    dispatch
  );
};
