import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      container: 'SCon-off',
      switch: 'switch-off',
      text: 'OFF'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.text === 'ON') {
      this.setState(state => ({
        container: 'SCon-off',
        switch: 'switch-off',
        text: 'OFF'
      }));
    } else {
      this.setState(state => ({
        container: 'SCon-on',
        switch: 'switch-on',
        text: 'ON'
      }));
    }
  }

  render() {
    return (
      <div className={ 'rootDivEl' }>
        <div onClick={ this.handleClick } className={ this.state.container }>
          <div className={ this.state.switch }>
          </div>
        </div>
        <div className={ 'text' }>
          {this.state.text}
        </div>
      </div>
    );
  }

}
