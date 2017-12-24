import React, { Component } from 'react';
import './navbar.css';
import { connect } from 'react-redux';
import { dropdown } from '../../actions/index';
import Divider from 'material-ui/Divider';
import FontAwesome from 'react-fontawesome';
// const FontAwesome = require('react-fontawesome');

class Navbar extends Component {
  render() {
    return (
      <header className="navbar">
        <div className="navbar__left">
          <img className="navbar__logo" src={require('../../assets/jobtome-white.png')} />
        </div>

        <div className="navbar__right">
          <FontAwesome
            className="navbar__icon"
            name="bars"
            size="2x"
            onClick={() => this.props.toggleMenu(this.props.dropdown)}
          />

          <ul className="navbar__list">
            <li className="navbar__item">Aziende</li>
            <li className="navbar__item">Jobs</li>
            <li className="navbar__item">Login</li>
          </ul>

          <div
            className={this.props.dropdown ? 'navbar__dropdown-show' : 'navbar__dropdown-hidden'}
          >
            <ul className="navbar__dropdownList">
              <li className="navbar__dropdownItem">For companies</li>
              <Divider />
              <li className="navbar__dropdownItem">Jobs</li>
              <Divider />
              <li className="navbar__dropdownItem">Login</li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  dropdown: state.dropdown,
});
const mapDispatchToProps = dispatch => ({
  toggleMenu: flag => dispatch(dropdown(flag)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
