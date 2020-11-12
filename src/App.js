import React, { Component } from 'react'
import Nav from './components/Nav'
import Content from './components/Content'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Content/>
      </React.Fragment>
    )
  }
}
export default App