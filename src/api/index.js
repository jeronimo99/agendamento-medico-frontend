import axios from './setup';

export const URLS = {
  LOGIN: '/login',
};

const login = (username, password) => {
  const loginEncoded = btoa(`${username}:${password}`);

  return axios.post(URLS.LOGIN, null, {
    headers: { Authorization: 'Basic ' + loginEncoded },
  });
};

const API = {
  LOGIN: login,
};

export default API;
