import React, { Component } from 'react';
import Ball from './Ball';

class Lottery extends Component {
  static defaultProps = {
    title: 'Lotto',
    maxBalls: 6,
    maxNum: 40,
  };
  state = {
    nums: Array.from({ length: this.props.maxBalls }),
  };

  generate = () => {};
  handleClick = () => {
    this.generate();
  };
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map(n => (
            <Ball num={n} />
          ))}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </div>
    );
  }
}
export default Lottery;
