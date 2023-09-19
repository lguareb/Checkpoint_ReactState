import React, { Component } from 'react';

class TimerComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        mountTime: null,
        elapsedTime: 0,
      };
    }
  
    componentDidMount() {
      this.setState({
        mountTime: new Date(),
      });
  
      this.intervalId = setInterval(() => {
        this.setState((prevState) => ({
          elapsedTime: Math.floor((new Date() - prevState.mountTime) / 1000),
        }));
      }, 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.intervalId);
    }
  
    render() {
      return (
        <div>
          <p>Time interval since mount: {this.state.elapsedTime} seconds</p>
        </div>
      );
    }
  }

  export default TimerComponent;  