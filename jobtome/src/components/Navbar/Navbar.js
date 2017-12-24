import React, { Component } from 'react';
import './navbar.css';
import { connect } from 'react-redux';

class Navbar extends Component {
  render() {
    return (
      <header className="navbar">
        <div className="navbar__left">
          <img className="navbar__logo" src={require('../../assets/jobtome2.png')} />
        </div>
        <div className="black-magic" />
        <div className="navbar__right">
          <ul className="navbar__list">
            <li className="navbar__item">For companies</li>
            <li className="navbar__item">Jobs</li>
            <li className="navbar__item">Login</li>
          </ul>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
