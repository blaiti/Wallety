import axios from 'axios';
import env from './env';
const axiosInstance = axios.create({
  baseURL: env.API,
  timeout: 60000,
});

export default axiosInstance;
