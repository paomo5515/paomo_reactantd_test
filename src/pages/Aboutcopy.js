import React from 'react'
import { connect } from '../utils/connect'
import { subAction } from '../store/actionCreators'

function About(props) {

  return (
    <div>
      <h2>About</h2>
      <h2>当前计数：{props.count}</h2>
      <button onClick={e => props.decrement(1)}>-1</button>
      <button onClick={e => props.subNumber(5)}>-5</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    count: state.count
  }
}
const mapDispatchProps = dsipathc => {
  return {
    decrement: function (num) {
      dsipathc(subAction(num))
    },
    subNumber: function (num) {
      dsipathc(subAction(num))
    }
  }
}


// connect 高阶组件把 About 组件传递进去 返回 calss 组件
export default connect(mapStateToProps, mapDispatchProps)(About)