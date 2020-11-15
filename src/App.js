import React, { Component } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Culture from './components/Culture'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/App.css'
import History from './components/History'
import Gallery from './components/Gallery'
// import Group from './components/Group'


class App extends Component {
  render() {
    return (
      <React.Fragment>

        <Nav />

        <Home />
        {/* <History />
        <Culture />
        <Gallery/> */}
        {/* <Group/> */}
        

      </React.Fragment>
    )
  }
}
export default App