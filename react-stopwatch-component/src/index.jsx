import React from 'react';
import ReactDOM from 'react-dom';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watch: 'watch-pause',
      timer: 0,
      icon: 'fas fa-play'
    };

    this.handleClick = this.handleClick.bind(this);
    this.timer = this.timer.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleReset() {
    if (this.state.watch === 'watch-pause') {
      this.setState(state => ({
        timer: 0
      }));
    }
  }

  handleClick() {
    if (this.state.watch === 'watch-pause') {
      this.setState(state => ({
        watch: 'watch-play',
        icon: 'fas fa-pause'
      }));
      this.timer();
    } else if (this.state.watch === 'watch-play') {
      clearInterval(this.timerID);
      this.setState(state => ({
        watch: 'watch-pause',
        icon: 'fas fa-play'
      }));
    }
  }

  timer() {
    this.timerID = setInterval(() => {
      this.setState(state => ({
        timer: this.state.timer + 1
      }));
    }, 1000);
  }

  render() {
    return (
      <div className={ 'main-container' }>
        <div onClick={ this.handleReset } className={ this.state.watch }>
          <div className={ 'timer' }>
            { this.state.timer }

          </div>
        </div>
        <div onClick={ this.handleClick } className={ 'icons' }>
          <i className={ this.state.icon }></i>

        </div>
      </div>
    );
  }
}

ReactDOM.render(<Stopwatch />, document.getElementById('root'));
