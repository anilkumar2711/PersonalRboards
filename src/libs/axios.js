import axios from 'axios';

export const apiContext = {
  hitcount: {
    unauthorized: 0,
    unauthenticated: 0
  }
};
// Base URL Configuration
const rboardsApiInstance = axios.create({
  baseURL: 'https://api_rboards.scholarbench.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

const scholarBenchInstance = axios.create({
  baseURL: "https://api.scholarbench.com/api/v1",
  headers: {
    'Content-Type': 'application/json',
  },
});

const handleRequestUse = (config) => {
  const tokenExeptionUrls = ["/auth/login"];
  const token = localStorage.getItem('authToken') // Replace with your token management logic
  if (token && !tokenExeptionUrls.includes(config.url)) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
};

const handleRequestErrorUse = (error) => {
  return Promise.reject(error);
};

const handleResponseUse = (response) => {
  let { data: domianResponse } = response;
  let { data: apiresponse } = domianResponse;
  return apiresponse;
};

const handleResponseErrorUse = (error) => {
  if (error.response) {
    apiContext.hitcount.unauthenticated++;
    if (error.response.status === 401) {
      console.log('Unauthorized, redirecting to login...');
      if(!error.config.url.endsWith("/auth/login")) {
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
};
// Add Request Interceptor


const genCurd = (axiosInstance)=>{
  axiosInstance.interceptors.request.use(handleRequestUse,handleRequestErrorUse);
  axiosInstance.interceptors.response.use(handleResponseUse,handleResponseErrorUse);
  return ({
    get: (url, params, config = {}) => axiosInstance.get(url, { params, ...config }),
    post: (url, data, config = {}) => axiosInstance.post(url, data, { ...config }),
    put: (url, data, config = {}) => axiosInstance.put(url, data, { ...config }),
    patch: (url, data, config = {}) => axiosInstance.patch(url, data, { ...config }),
    delete: (url, config = {}) => axiosInstance.delete(url, { ...config }),
  });
}

// API Wrapper Function
export const api = {
  main:genCurd(scholarBenchInstance),
  ...genCurd(rboardsApiInstance)
};
