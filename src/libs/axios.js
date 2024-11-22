import axios from 'axios';

export const apiContext = {
  hitcount: {
    unauthorized: 0,
    unauthenticated: 0
  }
};
// Base URL Configuration
const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    if(!config.url.startsWith("http")) {
      config.baseURL = 'https://api_rboards.scholarbench.com/api/v1';
    }
    const tokenExeptionUrls = ["/auth/login"];
    const token = localStorage.getItem('authToken') // Replace with your token management logic
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
    let { data: domianResponse } = response;
    let { data: apiresponse } = domianResponse;
    return apiresponse;
  },
  (error) => {
    if (error.response) {
      apiContext.hitcount.unauthenticated++;
      if (error.response.status === 401) {
        console.log('Unauthorized, redirecting to login...');
        if(error.config.url.endsWith("/auth/login")) {
          apiContext.service.methods.login().then(()=>{
            globalThis.location.reload();
          });
        }
        if(apiContext.hitcount.unauthenticated > 2) {
          alert("UnAuthenticated Exeception Reached Maximum");
        }
      } else if(error.response.status === 403) {
        apiContext.hitcount.unauthorized ++;
        if(!error.config.url.endsWith("/auth/refresh")) {
          apiContext.service.methods.refreshToken().then(()=>{
            apiContext.hitcount.unauthorized = 0;
            globalThis.location.reload();
          });
        }
        if(apiContext.hitcount.unauthorized > 2) {
          apiContext.service.methods.login().then(()=>{
            globalThis.location.reload();
          }).catch(()=>{
            alert("UnAuthorized Exeception Reached Maximum");
          });
        }
      }
      console.error('API Error:', error.response.status, error.response.data,error,error.config.url);
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
