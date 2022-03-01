import React, { PureComponent } from 'react'
import { CSSTransition, TransitionGroup } from "react-transition-group"

// import "./TransitionGroup.scss"

export default class TransitionGroupDemo extends PureComponent {

  state = {
    names: ["hello", "word", "tom"]
  }
  render() {
    return (
      <div>
        {
          this.state.names.map((item, index) => {
            return (
              <CSSTransition
                key={index}
                timeout={500}
                classNames="item"
              >
                <div>{item}</div>
              </CSSTransition>
            )
          })
        }
        <button onClick={e => this.addName()}>添加name</button>
      </div>
    )
  }
  
  addName() {
    this.setState({
      names: [...this.state.names, "jerry"]
    })
  }
}
