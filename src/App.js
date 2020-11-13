import React, { Component } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Culture from './components/Culture'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/App.css'



class App extends Component {
  render() {
    return (
      <React.Fragment>
        
        <Nav />
        
        <Home/>

        {/* <Culture/> */}
        
      </React.Fragment>
    )
  }
}
export default App