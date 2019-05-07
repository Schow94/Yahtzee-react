import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  static defaultProps = {
    numWords: ['one', 'two', 'three', 'four', 'five', 'six'],
    val: Math.ceil(Math.random() * 6)
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // made a new handleClick to access props from other handleClick passed down
  // Dice.js
  // Alternative is to use arrow fxn to bind Dice.js handleClick inside
  // onClick
  handleClick() {
    this.props.handleClick(this.props.idx);
  }

  render() {
    const { numWords, locked, val, disabled, rolling } = this.props;

    let classes = `fas fa-5x fa-dice-${numWords[val - 1]} `;

    if (locked) classes += 'Die-locked';
    if (rolling) classes += 'Die-rolling';
    return (
      <i
        className={`Die ${classes}`}
        onClick={this.handleClick}
        disabled={disabled}
      />
    );
  }
}

export default Die;
