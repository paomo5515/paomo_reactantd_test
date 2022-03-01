import React, { PureComponent } from 'react'
import axios from 'axios'

import request from './service/requset'

import "./App.scss"

export default class App extends PureComponent {

  state = {
    products: []
  }

  async componentDidMount() {
    // 1.真实开发逻辑
    // 拿到数据
    // this.setState({
    //   products:[...this.products, ...res]
    // })

    // 2.axios 发送网络请求
    // axios({
    //   url: "https://httpbin.org/get",
    //   params: {
    //     name: "hello",
    //     age: 12
    //   }
    // }).then(res => {
    //   console.log(res);
    // }).catch(err => {
    //   console.error(err);
    // });

    // 3.post 请求
    // axios({
    //   url: "https://httpbin.org/post",
    //   data: {
    //     name: "word",
    //     age: 13
    //   },
    //   method: "post"
    // }).then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.error(err)
    // })

    // 5.async await 拿到错误信息使用 try catch
    /* try {
      const result = await axios.get("https://httpbin.org/get", {
      params: {
        name: "tom",
        age: 1
      }
    })
    console.log(result);
    } catch (error) {
      console.log(error);
    } */

    /* axios.post("https://httpbin.org/post",{
      name:"jerry", age:2
    }).then(console.log) */

    // 6.axios all 
    /* const request1 = axios({
      timeout: 5000,  // 请求过期时间
      url: "/get",
      params: { name: "bob", age: 4 }
    })
    const request2 = axios({
      url: "/post",
      params: { name: "jpk", age: 5 },
      method: "post"
    })

    axios.all([request1, request2]).then(res => {
      console.log(res);
    }).catch(err => {

    }) */

    // 数组的解构
    /* axios.all([request1, request2]).then(([res1, res2]) => {
      console.log(res1, res2);
    }).catch(err => {

    }) */

    /*  const promise1 = new Promise((resolve, reject) => {
       setTimeout(() => {
         console.log("promise1");
       }, 1000);
     })
     const promise2 = new Promise((resolve, reject) => {
       setTimeout(() => {
         console.log("promise2");
       }, 3000);
     })
 
     // 当两个请求获取完  才执行下一步操作
     Promise.all([promise1, promise2]).then(res => {
       console.log(res);
     }) */

    // 8.创建新的实例  当向两台及以上的服务器发送请求
    /* const instance1 = axios.create({
      baseURL: "http://coderwhy.xyz",
      timeout: 5000,
      headers: {

      }
    })

    const instance2 = axios.create({
      baseURL: "http://baidu.xyz",
      timeout: 7000,
      headers: {

      }
    }) */

    // 9.请求和响应拦截
    axios.interceptors.request.use(config => {
      // 1.在发送网络请求的时候，在界面中间位置显示 Loading 的组件

      // 2.某一些请求要求用户必须携带 token，如果没有携带，那么直接跳转到登录界面(router)

      // 3.params/data序列化的操作
      console.log("请求被拦截")
      return config
    }, err => {

    })

    // 响应拦截
    axios.interceptors.response.use(res => {
      return res.data
    }, err => {
      if (err && err.response) {
        switch (err.response.status) {
          case 400:
            console.log("请求错误");
            break;
          case 401:
            console.log("未授权访问");
            break;
          default:
            console.log("其他错误信息");
        }
      }
      return err
    })

    /* axios.get("https://httpbin.org/get", {
      params: {
        name: "hello"
      }
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    }) */

    request({
      url: "/get",
      params: {
        name: "ton",
        age: 12
      }
    }).then(console.log)
  }

  render() {
    return (
      <div className='app'>
        App
      </div>
    )
  }
}

