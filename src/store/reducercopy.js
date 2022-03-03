import {
  ADD_NUMBER,
  SUB_NUMBER,
  CHANGE_BANNER,
  CHANGE_RECOMMEND
} from "./constant.js"


// 拆分reducer
const initCountState = {
  count: 0,
}
function countReducer(state = initCountState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, count: state.count + action.num }
    case SUB_NUMBER:
      return { ...state, count: state.count - action.num }
    default:
      return state;
  }
}

const initHomeState = {
  banners: [],
  recommends: []
}
function homeReducer(state = initHomeState, action) {
  switch (action.type) {
    case CHANGE_BANNER:
      return { ...state, banners: action.banners }
    case CHANGE_RECOMMEND:
      return { ...state, recommends: action.recommends }
    default:
      return state;
  }
}

function reducer(state = {}, action) {
  return {
    countInfo: countReducer(state.countInfo,action),
    homeInfo: homeReducer(state.homeInfo,action),
  }
}

export default reducer;