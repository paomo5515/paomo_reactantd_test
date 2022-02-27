import React, { PureComponent } from 'react'

import { Input, Button } from 'antd';
import moment from 'moment';
import "./index.scss"

const { TextArea } = Input;
export default class Commentinput extends PureComponent {

  state = {
    content: ""
  }
  render() {
    return (
      <div>
        <div className='commentinput'>
          <TextArea
            rows={4}
            onChange={e => this.handleChange(e)}
            value={this.state.content} />
        </div>
        <Button type='primary' onClick={e => this.addContent()}>添加评论</Button>
      </div>
    )
  }

  handleChange(event) {
    this.setState({
      content: event.target.value
    })
  }

  // 添加评论
  addContent() {
    // console.log(this.state.content);
    const commentInfo = {
      id: moment().valueOf(),
      avatar: "https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/baike/pic/item/7aec54e736d12f2e31b762424ec2d56285356866.jpg"
      , nickname: "hello",
      datetime: moment(),
      content: this.state.content
    }
    this.props.submitComment(commentInfo)
    this.setState({
      content: ""
    })
  }
}
