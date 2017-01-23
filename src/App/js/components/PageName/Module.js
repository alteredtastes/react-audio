import React, { Component } from "react";
import { Button } from "react-bootstrap";

class Module extends Component {
  constructor() {
    super()
    this.state = {
      audio: new AudioContext(),
      mod: 20,
      play: this.play.bind(this),
      stop: this.stop.bind(this),
      freqUp: this.freqUp.bind(this),
      freqDown: this.freqDown.bind(this)
    }
  }

  play () {
    const audio = this.state.audio;
    const gain = audio.createGain();
    const osc = audio.createOscillator();

    gain.connect(audio.destination);
    osc.connect(gain);
    osc.start()

    this.setState({gain, osc});
  }

  stop () {
    this.state.audio.close();
    this.setState({audio: new AudioContext()});
  }

  freqUp () {
    const mod = this.state.mod;
    const osc = this.state.osc;
    osc.frequency.value += mod;
  }

  freqDown () {
    const mod = this.state.mod;
    const osc = this.state.osc;
    osc.frequency.value -= mod;
  }

  render() {
    return (
      <div onLoad={this.state.createContext}>
        <Button
          bsStyle="success"
          value="play"
          onClick={this.state.play}>
          Play
        </Button>
        <Button
          bsStyle="danger"
          value="stop"
          onClick={this.state.stop}>
          Stop
        </Button>
        <Button
          bsStyle="warning"
          value="freq"
          onClick={this.state.freqUp}>
          FreqUp
        </Button>
        <Button
          bsStyle="warning"
          value="freq"
          onClick={this.state.freqDown}>
          FreqDown
        </Button>
      </div>
    )
  }
}

export default Module;
