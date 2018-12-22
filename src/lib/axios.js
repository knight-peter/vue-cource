import axios from "axios";
import { baseURL } from "@/config";
import { getToken } from "@/lib/util";

class HttpRequest {
  constructor(baseUrl = baseURL) {
    this.baseUrl = baseUrl;
    /* 队列，把请求的url放进去，如果队列变空，则意味着没有请求了，可以关闭loading */
    this.queue = {};
  }
  /* axios的默认配置 */
  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        //
      }
    };
    return config;
  }
  /* 当请求数为0时，关闭loading动画 */
  distroy(url) {
    delete this.queue[url];
    if (!Object.keys(this.queue).length) {
      // 关闭loading动画
      // hideLoading()
    }
  }
  /* 拦截器 */
  interceptors(instance, url) {
    // 请求前
    instance.interceptors.request.use(
      config => {
        // 添加一个全局的loading
        if (Object.keys(this.queue).length) {
          // 执行loading函数
          // loading()
        }
        // 把当前url放入queue队列中
        this.queue[url] = true;
        config.headers["Authorization"] = getToken();
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );
    // 接受后
    instance.interceptors.response.use(
      res => {
        // console.log(res);
        this.distroy(url);
        return res;
      },
      error => {
        this.distroy(url);
        if (error.code === 401) {
          // 401 说明 token 验证失败
          // 可以直接跳转到登录页面，重新登录获取 token
          location.href = "/login";
        } else if (error.code === 500) {
          // 服务器错误
          // do something
          return Promise.reject(error);
        }
      }
    );
  }
  /* axios实例 */
  request(options) {
    const instance = axios.create();
    /* 把新增的options参数和getInsideConfig默认参数合并成一个对象，后面的新增的会覆盖前面的 */
    options = Object.assign(this.getInsideConfig(), options);
    /* 执行拦截器 */
    this.interceptors(instance, options.url);
    /* 返回创建的axios实例 */
    return instance(options);
  }
}
export default HttpRequest;
