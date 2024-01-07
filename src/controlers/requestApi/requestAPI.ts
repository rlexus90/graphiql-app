import axios from 'axios';
import { getEndpoint } from '../../helpers/endpointSet';

const prerareJSON = (str: string) => {
  if (!str) return {};
  let ans = '';
  const arr = str
    .replace(/\n/g, '')
    .replace('{', '')
    .replace('}', '')
    .replace(/'/g, '"')
    .split(',');
  ans += '{';
  const arr1: string[] = [];
  arr.map((el) => el && arr1.push(el));
  ans += arr1.join(',') + '}';
  return JSON.parse(ans);
};

export const sendRequest = async (
  query: string,
  variables?: string,
  header?: string
) => {
  const grafQlQvery = {
    operationName: 'Query',
    query,
    variables: prerareJSON(variables ?? ''),
  };
  const headers = {
    ...prerareJSON(header ?? ''),
    'Content-Type': 'application/json',
  };

  const resp = await axios({
    url: getEndpoint(),
    method: 'post',
    data: grafQlQvery,
    headers,
  });

  return await resp.data;
};
