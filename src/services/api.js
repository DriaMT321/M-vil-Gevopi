import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.4:8010/api',
  //baseURL: 'http://192.168.0.10:8000',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
