import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getUser, setUser } from '../../helpers/LoginHeplers';
import { IUser } from '../../types/user';

interface IState {
  isLogin: boolean;
  user?: IUser;
}

const initialState: IState = {
  isLogin: Boolean(getUser()),
  user: getUser(),
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setIsLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload;
    },
    setUserStore: (state, action: PayloadAction<IUser>) => {
      const { email, uid, accessToken } = action.payload;
      state.user = { email, uid, accessToken };
      setUser({ email, uid, accessToken });
      state.isLogin = true;
    },
    delUserStore: (state) => {
      state.user = undefined;
      localStorage.removeItem('user');
      state.isLogin = false;
    },
  },
});

export const { setIsLogin, setUserStore, delUserStore } = authSlice.actions;

export default authSlice.reducer;
