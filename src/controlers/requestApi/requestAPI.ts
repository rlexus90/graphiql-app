import axios from 'axios';
import { getEndpoint } from '../../helpers/endpointSet';

export const sendRequest = async (query: string) => {
  const grafQlQvery = {
    operationName: 'Query',
    query,
    variables: {},
  };
  const headers = { 'Content-Type': 'application/json' };

  const resp = await axios({
    url: getEndpoint(),
    method: 'post',
    data: grafQlQvery,
    headers,
  });

  return await resp.data;
};
