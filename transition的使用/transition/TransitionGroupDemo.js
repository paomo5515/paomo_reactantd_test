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
                key={item}
                timeout={300}
                classNames="item"
              >
                <div>
                  {item}
                  <button onClick={e => this.removeItem(index)}>--</button>
                </div>
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

  removeItem(index) {
    this.setState({
      names: this.state.names.filter((item, indey) => index !== indey)
    })
  }
}
