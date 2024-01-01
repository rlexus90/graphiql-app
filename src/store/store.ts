import {
  configureStore,
  combineReducers,
  PreloadedState,
} from '@reduxjs/toolkit';
import respParam from './slices/RespParam';
import changeLang from './slices/ChangeLang';

const rootReduser = combineReducers({
  respParam,
  changeLang,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReduser,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReduser>;
export type StoreType = ReturnType<typeof setupStore>;
export type AppDispatch = StoreType['dispatch'];
