import { createSlice } from '@reduxjs/toolkit';
import { Language } from '../../types/localisation';

interface InitialState {
  language: Language;
}

const initialState: InitialState = {
  language: (localStorage.getItem('lang') as Language) ?? 'En',
};

export const changeLangSlice = createSlice({
  name: 'changeLang',
  initialState,
  reducers: {
    changeLang: (state) => {
      state.language = state.language === 'En' ? 'Ua' : 'En';
      localStorage.setItem('lang', state.language);
    },
  },
});

export const { changeLang } = changeLangSlice.actions;

export default changeLangSlice.reducer;
