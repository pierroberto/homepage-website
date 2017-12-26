import React, { Component } from 'react';
import './navbar.css';
import { connect } from 'react-redux';
import { dropdown } from '../../actions/index';
import Divider from 'material-ui/Divider';
import FontAwesome from 'react-fontawesome';

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
            <li className="navbar__item">
              <a href="#">Aziende</a>
            </li>
            <li className="navbar__item">
              <a href="#">Jobs</a>
            </li>
            <li className="navbar__item">
              <a href="#">Login</a>
            </li>
          </ul>

          <div
            className={this.props.dropdown ? 'navbar__dropdown-show' : 'navbar__dropdown-hidden'}
          >
            <ul className="navbar__dropdownList">
              <li className="navbar__dropdownItem">
                <a href="#">Aziende</a>
              </li>
              <Divider />
              <li className="navbar__dropdownItem">
                <a href="#">Jobs</a>
              </li>
              <Divider />
              <li className="navbar__dropdownItem">
                <a href="#">Login</a>
              </li>
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
