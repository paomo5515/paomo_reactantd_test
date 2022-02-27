import React, { PureComponent } from 'react'

import Commentitem from './components/Commentitem'
import Commentinput from './components/Commentinput'

import 'moment/locale/zh-cn'

import "./App.scss"

export default class App extends PureComponent {

  state = {
    commentList: []
  }

  render() {
    return (
      <div className='app'>
        {
          this.state.commentList.map((item, index) => {
            return <Commentitem
              key={item.id} comment={item}
              removeItem={e => this.removeComment(index)} />
          })
        }
        <Commentinput submitComment={info => this.submitComment(info)} />
      </div>
    )
  }
  submitComment(info) {
    // console.log(info);
    this.setState({
      commentList: [...this.state.commentList, info]
    })
  }

  // 删除评论
  removeComment(index) {
    // console.log(index);
    const newCommentList = [...this.state.commentList]
    newCommentList.splice(index,1)
    this.setState({
      commentList: newCommentList
    })
  }
}

