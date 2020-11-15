import React, { Component } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Culture from './components/Culture'
import Gallery from './components/Gallery'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/App.css'
import History from './components/History'



class App extends Component {
  render() {
    return (
      <React.Fragment>

        <Nav />

        
        <Gallery />
        

      </React.Fragment>
    )
  }
}
export default App