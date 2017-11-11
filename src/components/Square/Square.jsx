import React, { Component } from "react";
import PropTypes from "prop-types";

class Square extends Component {
  static propTypes = {
    black: PropTypes.bool
  };

  render() {
    const { black } = this.props;
    const fill = black ? 'black' : 'white';
    const stroke = black ? 'white' : 'black';

    return (
      <div style={{
        backgroundColor: fill,
        color: stroke,
        width: '40px',
        height: '40px',
      }}>
        {this.props.children}
      </div>
    );
  }
}

Square.defaultProps = {};

export default Square;
