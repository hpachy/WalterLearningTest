import React, { Component } from 'react'
import './App.css';
import Rectangle from './Rectangle'

class App extends Component {
  state = {
    Timer: 40,
    timerDisplay: 40,
    currentTime: new Date().getSeconds(),
    interval: null
  }
  componentDidMount() {
   var interval= setInterval(() => this.timeLaucher(this.state.Timer), 1000).bind
   this.setState({interval : interval})
  }
  componentWillUnmount() {
      clearInterval(this.state.interval)
  }

  changeShape(Timer) {
    if ( Timer > 20 )
      return 'blue'
    if ( Timer > 12 && Timer <= 20 )
      return 'orange'
    if ( Timer >= 0 && Timer <= 12 )
      return 'red'
    return 'hidden'
  }

  timeLaucher = time => {
    const {Timer, currentTime} = this.state
    var tmp = new Date().getSeconds()
    console.log('loop')
    if (Timer === 0){
      this.setState({Timer: 0, currentTime: NaN , timerDisplay: '0'})
      clearInterval(this.state.interval)
      this.setState({interval: null})
      return
    }
    if (currentTime !== tmp){
      var str = Timer.toString()
      if (str.length === 1){
        var addZero = "0"
        str = addZero.concat('', str)
      }
      this.setState({Timer: Timer - 1, currentTime: tmp, timerDisplay: str})
    }
    return tmp
  }

  render() {
    const {Timer, timerDisplay} = this.state
    return (
    <div className="App">
      <Rectangle 
        compter={timerDisplay}
        feedback={this.changeShape(Timer + 1)} 
      />
    </div>
  );
}
}

export default App;
