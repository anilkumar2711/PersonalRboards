import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api_rboards.scholarbench.com/api/v1', // Replace with your API's base URL
  headers: {
    'Content-Type': 'application/json',
    'bearerAuth': ''
  },
});

export const api = axiosInstance;

export default axiosInstance;
