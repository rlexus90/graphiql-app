import { lazy } from 'react';

export const EditorComponent = lazy(
  () => import('../component/EditorComponent/EditorComponent')
);

export const Docs = lazy(() => import('../component/Docs/Dock'));
