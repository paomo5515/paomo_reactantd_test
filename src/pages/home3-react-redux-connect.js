import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import {
  addAction,
  changeBannersAction,
  changeRecommendAction
} from '../store/actionCreators'

class Home extends PureComponent {

  componentDidMount() {
    axios({
      url: "http://123.207.32.32:8000/home/multidata"
    }).then(res => {
      const data = res.data.data
      // console.log("轮播图", data.banner.list);
      // console.log("推荐", data.recommend.list);
      this.props.changeBanners(data.banner.list)
      this.props.changeRecommends(data.recommend.list)
    })
  }
  render() {
    return (
      <div>
        <h2>Home</h2>
        <h2>当前计数：{this.props.count}</h2>
        <button onClick={e => this.props.increment(1)}>+1</button>
        <button onClick={e => this.props.addNumber(5)}>+5</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  count: state.count
})
const mapDispatchProps = dispatch => {
  return {
    increment: function (num) {
      dispatch(addAction(num))
    },
    addNumber: function (num) {
      dispatch(addAction(num))
    },
    changeBanners(banners){
      dispatch(changeBannersAction(banners))
    },
    changeRecommends(recommends){
      dispatch(changeRecommendAction(recommends))
    }
  }
}

export default connect(mapStateToProps, mapDispatchProps)(Home)