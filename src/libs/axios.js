import axios from 'axios';

// Base URL Configuration
const axiosInstance = axios.create({
  baseURL: 'https://api_rboards.scholarbench.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add Authorization Header Dynamically
    const token = localStorage.getItem('authToken') || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZDk5ZjU3MjAtZjA3ZC00ZDM2LTk5OTAtZGMxOTlkNGMwOWI3IiwicHVibGlzaGluZ19uYW1lIjpudWxsLCJlbWFpbCI6ImFuaWxrdW1hcmtyaXNobmEwMjdAZ21haWwuY29tIiwiZnVsbF9uYW1lIjoiQW5pbGt1bWFyICIsInJvbGVfbmFtZSI6bnVsbCwicm9sZV9pZCI6bnVsbCwiaWF0IjoxNzMyMTA0NjU5LCJleHAiOjE3MzIxMDgyNTl9.mAMtOLeEpGHlirsMUlkwqpcyLTQrzquY6JD4xyJGoAg"; // Replace with your token management logic
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    let { data:domianResponse } = response;
    let { data:apiresponse } = domianResponse;
    return apiresponse;
  },
  (error) => {
    if (error.response) {
      console.error('API Error:', error.response.status, error.response.data);
      if (error.response.status === 401) {
        console.log('Unauthorized, redirecting to login...');
        window.location.href = '/login'; // Adjust this path accordingly
      }
    } else {
      console.error('Network Error:', error.message);
    }
    return Promise.reject(error);
  }
);

// API Wrapper Function
export const api = {
  get: (url, params, config = {}) => axiosInstance.get(url, { params, ...config }),
  post: (url, data, config = {}) => axiosInstance.post(url, data, { ...config }),
  put: (url, data, config = {}) => axiosInstance.put(url, data, { ...config }),
  delete: (url, config = {}) => axiosInstance.delete(url, { ...config }),
};

export default axiosInstance;
