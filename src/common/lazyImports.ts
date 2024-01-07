import { lazy } from 'react';

export const Response = lazy(
  () => import('../component/ResponseComponent/ResponseComponent')
);

export const Docs = lazy(() => import('../component/Docs/Dock'));

export const RequestEditor = lazy(
  () => import('../component/RequestEditor/RequestEditor')
);
