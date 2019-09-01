//axios配置
import axios from 'axios';
import config from './config';
import qs from 'qs';

axios.defaults.baseURL = config.baseURL;
//发送请求前的拦截处理
axios.interceptors.request.use(config=>{
        // console.log(config)
    if(config.method==="post"){
        // console.log(config)
        config.data = qs.stringify(config.data)
    }
    return config
},error=>{
    return Promise.reject(error)
})
//拦截器--响应返回后拦截处理
axios.interceptors.response.use(response=>{
    // 响应成功的回调函数   response 是axios封装过后的数据
    // console.log(response)
    //封装返回的数据
    let res = {
        ...response,
        data:response.data.data,
        status:response.data.status,
        message:response.data.message,
    }
    return res;
    },error=> {
    // 响应失败的回调函数
    return Promise.reject(error);
    });
export default axios;