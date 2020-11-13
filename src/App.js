import React, { Component } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Culture from './components/Culture'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/App.css'
import History from './components/History'



class App extends Component {
  render() {
    return (
      <React.Fragment>
        
        <Nav />
        
        {/* <Home/> */}

        {/* <Culture/> */}
       
        {/* <History/> */}
        
        
      </React.Fragment>
    )
  }
}
export default App