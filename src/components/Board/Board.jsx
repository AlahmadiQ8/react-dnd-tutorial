import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Square from '../Square';
import Knight from '../Knight';

class Board extends Component {
  static propTypes = {
    knightPosition: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    moveKnight: PropTypes.func.isRequired,
  };

  renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);

    return (
      <div
        key={i}
        style={{ width: '12.5%', height: '12.5%' }}
        onClick={() => this.props.moveKnight(x, y)}
      >
        <Square
          x={x}
          y={y}
          moveKnight={this.props.moveKnight}
          knightPosition={this.props.knightPosition}
        >
          {this.renderPiece(x, y)}
        </Square>
      </div>
    );
  }

  renderPiece(x, y) {
    const [knightX, knightY] = this.props.knightPosition;
    if (x === knightX && y === knightY) {
      return <Knight />;
    }
  }

  render() {
    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i));
    }

    return (
      <div
        style={{
          display: 'flex',
          alignContent: 'center',
          flexWrap: 'wrap',
          width: '320px',
        }}
      >
        {squares}
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Board);
