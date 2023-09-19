import React, { Component, useState, setState } from 'react';
import { Form, Container } from 'react-bootstrap';
import PlayersList from './components/PlayersList';
import TimerComponent from './components/TimerComponent';


class App extends Component {
  
  constructor(props) {
    super(props); //in order to use 'this' in the parent constructor (basically calling the constructor of React. Component)
    this.state = {
      showCards: false,
    };
  }

  handleToggle = () => {
    this.setState((prevState) => ({
      showCards: !prevState.showCards,
    }));
  };

  render() {
    
    return (
      
      <>
        <div className="App">
          <h1 style={{textAlign:"center", margin:"3rem"}}>FIFA player cards</h1>

          <Container className="mt-5">
            <Form>
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Show Cards"
                checked={this.state.showCards}
                onChange={this.handleToggle}
              />
            </Form>
          </Container>
          <TimerComponent />
          {this.state.showCards && (
            <PlayersList /> 
          )}
        </div>

      </>
    );
  }
}

export default App;
