import { getIntrospectionQuery, buildClientSchema, printSchema } from 'graphql';
import { getEndpoint } from './endpointSet';
import axios from 'axios';

export const getGraphyqlSchema = async () => {
  const headers = { 'Content-Type': 'application/json' };
  const introspection = getIntrospectionQuery();
  const resp = await axios({
    url: getEndpoint(),
    method: 'post',
    data: JSON.stringify({ query: introspection }),
    headers,
  });

  const graphqlShema = buildClientSchema(resp.data.data);
  const schema = printSchema(graphqlShema);

  return schema ?? 'Oops! Cant build schema';
};
