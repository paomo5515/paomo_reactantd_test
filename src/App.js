import React, { PureComponent } from 'react'

// import CSSTransitionDemo from "./transition/CSSTransitionDemo"
// import SwitchTransitionDemo from "./transition/SwitchTransitionDemo"
import TransitionGroupDemo from "./transition/TransitionGroupDemo"

import "./App.scss"

export default class App extends PureComponent {
  render() {
    return (
      <div className='app'>
        {/* <CSSTransitionDemo /> */}
        {/* <SwitchTransitionDemo /> */}
        <TransitionGroupDemo />
      </div>
    )
  }
}
