import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      icon: 'fas fa-times',
      error: 'A password is required.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
    console.log(event.target.value);

    if (event.target.value.length === 0) {
      this.setState(state => ({
        icon: 'fas fa-times',
        error: 'A password is required.'
      }));
    } else if (
      event.target.value.length > 0 &&
      event.target.value.length < 8
    ) {
      this.setState(state => ({
        icon: 'fas fa-times',
        error: 'Your password is too short.'
      }));
    } else {
      this.setState(state => ({
        icon: 'fas fa-check',
        error: ''
      }));
    }

  }

  handleSubmit(event) {
    console.log(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>

          <label htmlFor="password">Password</label>
          <input type="password"
            value={ this.state.value }
            onChange={ this.handleChange }
            id="password"

          />
        </form>
        <i className={ this.state.icon } ></i>
        <p className={ 'error' }> { this.state.error } </p>
      </div>
    );
  }
}
