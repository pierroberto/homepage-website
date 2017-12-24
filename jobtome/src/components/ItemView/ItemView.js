import React, { Component } from 'react';
import './item-view.css';
import { connect } from 'react-redux';

import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

class ItemView extends Component {
  render() {
    return (
      <div className="item-view">
        <div className="item-view__wrapper">
          <img className="item-view__pic" src={require('../../assets/home2.jpg')} />
        </div>
        <div className="item-view__wrapper">
          <Divider style={{ marginTop: 5 }} />
          <div className="item-view__button-container">
            <RaisedButton label="Maggiori info" style={{ marginRight: 10, width: '50%' }} />
            <RaisedButton label="Jobs" style={{ width: '50%' }} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(ItemView);
