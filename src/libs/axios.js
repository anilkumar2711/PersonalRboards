import axios from 'axios';

// Base URL Configuration
const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add Authorization Header Dynamically
    console.log("config",config.url);
    if(!config.url.startsWith("http")) {
      config.baseURL = 'https://api_rboards.scholarbench.com/api/v1';
    }
    const tokenExeptionUrls = ["/auth/login"];
    const token = localStorage.getItem('authToken') || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZDk5ZjU3MjAtZjA3ZC00ZDM2LTk5OTAtZGMxOTlkNGMwOWI3IiwicHVibGlzaGluZ19uYW1lIjpudWxsLCJlbWFpbCI6ImFuaWxrdW1hcmtyaXNobmEwMjdAZ21haWwuY29tIiwiZnVsbF9uYW1lIjoiQW5pbGt1bWFyICIsInJvbGVfbmFtZSI6bnVsbCwicm9sZV9pZCI6bnVsbCwiaWF0IjoxNzMyMTA0NjU5LCJleHAiOjE3MzIxMDgyNTl9.mAMtOLeEpGHlirsMUlkwqpcyLTQrzquY6JD4xyJGoAg"; // Replace with your token management logic
    if (token && !tokenExeptionUrls.includes(config.url)) {
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
      console.error('API Error:', error.response.status, error.response.data,error);
      if (error.response.status === 403) {
        console.log('Unauthorized, redirecting to login...');
        if(error.config.url != "/auth/login") {
          globalThis.service.methods.login();
        }
        // window.location.href = '/login';
        // globalThis.service.methods.login();
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
