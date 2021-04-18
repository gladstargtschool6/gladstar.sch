import Config from 'react-native-config';

const productionUrl = Config.'https://imdvvfcbtrfewysxgrnr.supabase.co';

const developmentUrl = Config.'https://imdvvfcbtrfewysxgrnr.supabase.co';

const ENVIRONMENT = {
  PROD: 'PROD',
  DEV: 'DEV',
};

const currentEnv = ENVIRONMENT.DEV;

const baseUrl =
  (currentEnv === ENVIRONMENT.PROD && productionUrl) || developmentUrl;

const baseUrlApi = `${baseUrl}'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYxNDMzNzg3MSwiZXhwIjoxOTI5OTEzODcxfQ.O7Ck0RFbXxsJ9BpxdAuey5O_MJcC_lHM06xDYKTbWxg`;

let ApiConfig = {
  baseUrl,
  baseUrlApi,
  token: null,
  login: `${baseUrlApi}login`,
  user: `${baseUrlApi}users`,
};

export {ApiConfig};
