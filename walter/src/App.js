import React, { Component } from 'react'
import './App.css';
import Rectangle from './Rectangle'
import changeShape from './changeShape'

class App extends Component {
  state = {
    Timer: 40,
    currentTime: new Date().getSeconds(),
    interval: null
  }
  componentDidMount() {
   var interval = setInterval(() => this.timeLaucher(this.state.Timer), 1000)
   this.setState({interval : interval})
  }

  timeLaucher = time => {
    const {Timer, currentTime} = this.state
    var tmp = new Date().getSeconds()
    if (Timer === 0){
      this.setState({Timer: 0, currentTime: NaN})
      clearInterval(this.state.interval)
      return
    }
    if (currentTime !== tmp){
      this.setState({Timer: Timer - 1, currentTime: tmp})
    }
    return tmp
  }

  render() {
    const {Timer} = this.state
    return (
    <div className="App">
      <Rectangle 
        compter={Timer}
        feedback={changeShape(Timer)}
      />
    </div>
  );
}
}

export default App;
