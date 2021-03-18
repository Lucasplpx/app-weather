import axios from 'axios';

export const key = 'your_key';

const api = axios.create({
  baseURL: 'https://api.hgbrasil.com',
});

export default api;
