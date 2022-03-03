// 要求导出一个生成器函数
import { takeEvery, put, all } from "redux-saga/effects"
import axios from "axios";
import { FETCH_HOME_MULTIDATA } from "./constant"
import {
  changeBannersAction,
  changeRecommendAction
} from "./actionCreators"

function* fetchHomeMultidata(action) {
  const res = yield axios.get("http://123.207.32.32:8000/home/multidata")
  // console.log(res);
  const banners = res.data.data.banner.list
  // yield put(changeBannersAction(banners))
  const recommends = res.data.data.recommend.list
  // yield put(changeRecommendAction(recommends))

  yield all([
    yield put(changeBannersAction(banners)),
    yield put(changeRecommendAction(recommends))
  ])
}

function* mySage() {
  // takeLatest takeEvery的区别
  // takeLatest：依次只能监听一个对应的 action
  // takeEvery的区别：每一个都会被执行
  // 传入的函数 表示监听的 action.type,第二个参数  生成器函数
  yield takeEvery(FETCH_HOME_MULTIDATA, fetchHomeMultidata)

  /*   yield all([
      takeLast(FETCH_HOME_MULTIDATA. fetchHomeMultidata),
      takeLast(FETCH_HOME_MULTIDATA. fetchHomeMultidata),
    ]) */
}

export default mySage;
