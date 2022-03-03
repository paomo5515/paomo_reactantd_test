import axios from 'axios'
import {
  ADD_NUMBER,
  SUB_NUMBER,
  CHANGE_BANNER,
  CHANGE_RECOMMEND,
  FETCH_HOME_MULTIDATA
} from "./constant.js"

export const addAction = (num) => {
  return {
    type: ADD_NUMBER,
    num
  }
}
export const subAction = num => ({
  type: SUB_NUMBER,
  num
})

//  轮播图和推荐的 action
export const changeBannersAction = (banners) => ({
  type: CHANGE_BANNER,
  banners
})
export const changeRecommendAction = (recommends) => ({
  type: CHANGE_RECOMMEND,
  recommends
})


// redux-thunk 中定义的 action函数
// getState 如果本次网络请求依赖 redux中的某个数据 通过getState拿到原来 state
export const getHomeMultidataAction = (dispatch,getState) => {
  // console.log("action函数中",dispatch);
  axios({
      url: "http://123.207.32.32:8000/home/multidata"
    }).then(res => {
      const data = res.data.data
      dispatch(changeBannersAction(data.banner.list))
      dispatch(changeRecommendAction(data.recommend.list))
    })
}


// redux-saga拦截的 action
export const fetchHomeMultidataAction= {
  type:FETCH_HOME_MULTIDATA
}