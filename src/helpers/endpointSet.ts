import { ENDPOINT } from '../common/constants';

export const setEndpoint = (endpoint: string) => {
  localStorage.setItem('endpoint', endpoint);
};

export const getEndpoint = () => {
  return localStorage.getItem('endpoint') ?? ENDPOINT;
};
