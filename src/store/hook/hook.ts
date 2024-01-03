import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '../store';
import { firebaseSlice } from '../slices/FirebaseSlice';
import { changeLangSlice } from '../slices/ChangeLang';
import { authSlice } from '../slices/authSlice';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(
    {
      ...firebaseSlice.actions,
      ...changeLangSlice.actions,
      ...authSlice.actions,
    },
    dispatch
  );
};
