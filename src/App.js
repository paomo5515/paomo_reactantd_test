import React, { PureComponent } from 'react'

import "./App.scss"

export default class App extends PureComponent {

  state = {
    commentList: []
  }

  
  render() {
    return (
      <div className='app'>
        App
      </div>
    )
  }
}

