import axios from "axios";
const httpRequest = axios.create({
  //baseURL: "http://162.14.64.33:3000",
  baseURL: "http://127.0.0.1:3000",
  timeout: 10000,
});
// 添加请求拦截器
httpRequest.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
httpRequest.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response;
    //4xx
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default httpRequest;
