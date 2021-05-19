import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:3300'
axios.defaults.timeout = 5000


// 第二步，请求拦截
axios.interceptors.request.use(
  function (config) {
    // 请求发生前处理
    return config;
  }, function (error) {
    // 请求错误处理
    return Promise.reject(error);
  } 
);
 
// 第三步，响应阻拦
axios.interceptors.response.use(
  function (response) {
    // 响应数据处理
    return response.data;
  }, function (error) {
  // 响应错误处理
  return Promise.reject(error);
  }
);


export default axios