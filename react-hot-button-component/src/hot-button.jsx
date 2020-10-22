import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: 'bc-white', count: 1 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.count < 3) {
      this.setState(state => ({
        color: 'bc-white',
        count: state.count + 1
      }));
    } else if (this.state.count >= 3 && this.state.count < 6) {
      this.setState(state => ({
        color: 'bc-dark-purple',
        count: state.count + 1
      }));
    } else if (this.state.count >= 6 && this.state.count < 9) {
      this.setState(state => ({
        color: 'bc-light-purple',
        count: state.count + 1
      }));
    } else if (this.state.count >= 9 && this.state.count < 12) {
      this.setState(state => ({
        color: 'bc-pink',
        count: state.count + 1
      }));
    } else if (this.state.count >= 12 && this.state.count < 15) {
      this.setState(state => ({
        color: 'bc-orange',
        count: state.count + 1
      }));
    } else if (this.state.count >= 15 && this.state.count < 18) {
      this.setState(state => ({
        color: 'bc-yellow',
        count: state.count + 1
      }));
    } else if (this.state.count === 18) {
      this.setState(state => ({
        color: 'bc-white',
        count: 1
      }));
    }
  }

  render() {
    return (
      <button className={this.state.color} onClick={this.handleClick}>
        {'Hot Button'}
      </button>
    );
  }
}
