import {
  ADD_NUMBER,
  SUB_NUMBER,
  CHANGE_BANNER,
  CHANGE_RECOMMEND
} from "./constant.js"

const initState = {
  count: 0,
  banners: [],
  recommends: []
}
function reducer(state = initState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, count: state.count + action.num }
    case SUB_NUMBER:
      return { ...state, count: state.count - action.num }
    case CHANGE_BANNER:
      return {...state, banners: action.banners}
    case CHANGE_RECOMMEND:
      return {...state, recommends: action.recommends}
    default:
      return state;
  }
}

export default reducer;