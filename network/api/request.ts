import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError} from 'axios';
import Router from 'next/router';

import CookieUtils from 'utils/CookieUtils';

const config: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
};

const request: AxiosInstance = axios.create(config);

axios.interceptors.request.use(
  function (config) {
    const token = CookieUtils.getToken();
    if (token) {
      (config as any).headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    if (error.response && error.response.status === 401) {
      Router.replace('/');
      return;
    }
    return Promise.reject(error);
  }
);

export default request;
