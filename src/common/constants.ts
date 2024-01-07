export const ENDPOINT = 'https://countries.trevorblades.com/graphql';
// export const ENDPOINT = 'https://spacex-production.up.railway.app/';

export const WINDOW_GAP = 35;

export const TAB = '  ';

export const EXAMPLE_QUERY = `query 
Query($code: ID!, $countryCode2: ID!) {
  continent(code: $code) {
    name
  }
  country(code: $countryCode2) {
    name
  }
}`;

export const EXAMPLE_VARIABLES = `{
  "code": "AF",
  "countryCode2": "AE",
}`;

export const EXAMPLE_HEADERS = `  'Content-Type': 'application/json',`;
