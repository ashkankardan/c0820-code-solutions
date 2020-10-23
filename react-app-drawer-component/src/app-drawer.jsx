import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: '',
      menu: 'hidden'
    };
    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  showMenu() {
    this.setState(state => ({
      icon: 'hidden',
      menu: ''
    }));
  }

  hideMenu(event) {
    if (event.target.className === 'nav-item' || event.target.className === 'nav-container ') {
      this.setState(state => ({
        icon: '',
        menu: 'hidden'
      }));
    }
  }

  render() {
    return (
      <div>
        <i onClick={ this.showMenu } className={ `fas fa-bars ${this.state.icon}` }></i>
        <div onClick={ this.hideMenu } className={`nav-container ${this.state.menu}` }>
          <nav>
            <h1>Menu</h1>
            <ul>
              <li onClick={ this.hideMenu } className={ 'nav-item' }>About</li>
              <li onClick={ this.hideMenu } className={ 'nav-item' }>Get Started</li>
              <li onClick={ this.hideMenu } className={ 'nav-item' }>Sign In</li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
