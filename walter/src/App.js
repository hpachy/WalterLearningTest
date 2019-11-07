import React, { Component } from 'react'
import './App.css';
import Rectangle from './Rectangle'

const allTimer = [45, 50]

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
      clearInterval(this.timeLaucher)
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

  timeLaucher = index => {
    const {Timer, currentTime} = this.state
    var tmp = new Date().getSeconds()
    if (Timer === 0){
      this.setState({Timer: 0, currentTime: NaN , timerDisplay: '0'})
      clearInterval(this.state.timeLaucher)
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

  activateOnclick = index => {
    console.log('here', index)
    this.timeLaucher(index)
  }

  render() {
    const {Timer, timerDisplay} = this.state
    return (
    <div className="App">
      <Rectangle 
        compter={timerDisplay}
        feedback={this.changeShape(Timer + 1)}
        // index={index}        
      />
      {
        allTimer.map((crate, index) => 
          <Rectangle 
            compter={crate}
            feedback={this.changeShape(crate + 1)}
            onClick={this.activateOnclick}
            index={index}
            key={index}
          />
        ) 
      }
    </div>
  );
}
}

export default App;
