import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:9876',
  withCredentials: true,
  timeout: 4000
});