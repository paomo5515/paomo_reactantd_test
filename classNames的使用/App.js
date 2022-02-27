import React, { PureComponent } from 'react'

import classNames from 'classnames'

export default class App extends PureComponent {

  state = {
    isActive: true
  }

  render() {
    const { isActive } = this.state
    const isBar = true
    const errClass = "error"
    const warnClass = null

    return (
      <div>
        {/* 原生 React中添加 calss 的方法 */}
        <h2 className="foo bar title">我是标题1</h2>
        <h2 className={"title" + (isActive ? " actived" : "")}>我是标题2</h2>
        <h2 className={['title', (isActive ? "actived" : "")].join(" ")}>我是标题3</h2>

        {/* classnames 库添加 class */}
        <h2 className={classNames("foo", "bar", "title")}>我是标题4</h2>
        <h2 className={classNames({ "active": isActive, "bar": isBar }, "title")}>classNames我是标题5</h2>
        <h2 className={classNames("foo", errClass, warnClass, { "active": isActive })}>我是标题6</h2>
        <h2 className={classNames(["bar", "foo"])}>我是标题7数组class</h2>
        <h2 className={classNames(["bar", "foo", { "active": isActive }])}>我是标题8</h2>
        <h2>我是标题9</h2>
      </div>
    )
  }
}
