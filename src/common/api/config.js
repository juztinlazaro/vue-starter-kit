import axios from 'axios';

axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'somethingexampletoken';
axios.defaults.headers.get['Accepts'] = 'application/json';

const requestInterceptors = axios.interceptors.request.use(config => {
  console.log(config);
  return config;
});

const responseInterceptors = axios.interceptors.response.use(res => { 
  console.log(res);
  return res;
});

axios.interceptors.request.eject(requestInterceptors);
axios.interceptors.response.eject(responseInterceptors);
