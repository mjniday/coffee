import React, { Component } from 'react';
import beans from './beans.svg';
import { Link } from 'react-router';

class AppDetailHeader extends Component {
  render() {
    return (
      <nav className="App-detail-header">
        <div className="logo">
          <Link to="/">
            <img src={beans} role="presentation" />
          </Link>
        </div>
      </nav>
    );
  }
}

export default AppDetailHeader;