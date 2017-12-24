import React, { Component } from 'react';
import './list-view.css';
import { connect } from 'react-redux';
import ItemView from '../ItemView/ItemView';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

class Navbar extends Component {
  render() {
    return (
      <div className="list-view">
        <ItemView />
        <ItemView />
        <ItemView />
        <ItemView />
      </div>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
