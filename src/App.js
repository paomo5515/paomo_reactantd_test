import React, { PureComponent } from 'react'
import axios from 'axios'

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

    // // post 请求
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

    // async await 拿到错误信息使用 try catch
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

    // axios all 
    const request1 = axios({
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

    })

    // 数组得解构
    /* axios.all([request1, request2]).then(([res1, res2]) => {
      console.log(res1, res2);
    }).catch(err => {

    }) */

    const promise1 = new Promise((resolve, reject) => {
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
    })
  }

  render() {
    return (
      <div className='app'>
        App
      </div>
    )
  }
}

