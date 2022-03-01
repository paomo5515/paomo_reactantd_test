import React, { PureComponent } from 'react'
import { CSSTransition, TransitionGroup } from "react-transition-group"

import "./TransitionGroup.scss"

export default class TransitionGroupDemo extends PureComponent {

  state = {
    names: ["hello", "word", "tom"]
  }
  render() {
    const { names } = this.state
    return (
      <>
        <TransitionGroup >
          {
            names.map((item, index) => (
              <CSSTransition
                key={index}
                timeout={300}
                classNames="item"
              >
                <div>{item}</div>
              </CSSTransition>
            ))
          }
        </TransitionGroup>
        <button onClick={e => this.addName()}>添加name</button>
      </>

    )
  }

  addName() {
    this.setState({
      names: [...this.state.names, "jerry"]
    })
  }
}
