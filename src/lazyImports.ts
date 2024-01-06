import { lazy } from 'react';

export const EditorComponent = lazy(
  () => import('./component/EditorComponent/EditorComponent')
);
