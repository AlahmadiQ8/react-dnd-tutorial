import React, { Component } from 'react';

import Board from './components/Board';
import { canMoveKnight } from './utils';

import './App.css';

class App extends Component {
  state = {
    knightPosition: [0, 0],
  };

  moveKnight = (x, y) => {
    if (canMoveKnight(this.state.knightPosition, x, y)) {
      this.setState({ knightPosition: [x, y] });
    }
  };

  render() {
    return (
      <div className="App">
        <Board
          moveKnight={this.moveKnight}
          knightPosition={this.state.knightPosition}
        />
      </div>
    );
  }
}

export default App;
