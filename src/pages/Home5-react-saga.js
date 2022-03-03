import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  addAction,
  fetchHomeMultidataAction
} from '../store/actionCreators'

class Home extends PureComponent {

  componentDidMount() {
    this.props.getHomeMultidata()
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
  count: state.countInfo.count
})
const mapDispatchProps = dispatch => {
  return {
    increment: function (num) {
      dispatch(addAction(num))
    },
    addNumber: function (num) {
      dispatch(addAction(num))
    },
    getHomeMultidata(){
      dispatch(fetchHomeMultidataAction)
    }
  }
}

export default connect(mapStateToProps, mapDispatchProps)(Home)