import React, { Component } from 'react';
import './Navbar.css';
import { connect } from 'react-redux';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        navbar
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});
const mapDispatchToProps = (dispatch) => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
