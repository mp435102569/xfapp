import axios from 'axios'
import { Toast } from 'vant'//轻提示

// 以实例的方式 创建
var http = axios.create({
  baseURL: process.env.NODE_ENV == 'development' ? '/api' : 'http://backend-api-01.newbee.ltd/api',
  timeout: 5000,//超时时间5秒
})
// 添加请求拦截器
http.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  config.headers.token=localStorage.getItem('xfapptoken')
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  let data = response.data;
  if (data.resultCode !== 200) {
    // 证明后台没给我们正常的内容
    Toast.fail(data.message)
    return Promise.reject(data)
  } else {
    return data
  }
  return response.data;
}, function (error) {
  // 对响应错误做点什么  4xx 5xx的错误
  Toast.fail('系统繁忙')
  return Promise.reject(error);
});

export default http