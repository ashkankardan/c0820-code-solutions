/* eslint-disable no-console */

import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <label>
          Email
          <input id={ 'email' } value={ this.state.event } onChange={ this.handleChange } placeholder={ 'me@me.com' } type="email"/>
        </label>
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}

ReactDOM.render(<NewsletterForm />, document.getElementById('root'));
