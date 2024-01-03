import { createSlice } from '@reduxjs/toolkit';
import { auth } from '../../controlers/firebase/firebase';

const initialState = {
  auth,
};

export const firebaseSlice = createSlice({
  name: 'firebaseSlice',
  initialState,
  reducers: {},
});

export default firebaseSlice.reducer;
