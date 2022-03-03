import React, { PureComponent } from 'react'
// import Home from './pages/Home'
// import About from './pages/About'
import Aboutcopycopy from "./pages/Aboutcopycopy"
// import Homecopycopy from "./pages/Homecopycopy"
import Home5 from "./pages/Home5-react-saga"

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home5 />
        <hr />
        <Aboutcopycopy />
      </div>
    )
  }
}
