import React, { Component } from 'react';
import './Search.css';
import { connect } from 'react-redux';

class Search extends Component {
  render() {
    return (
      <div className="search">
        searchbar
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});
const mapDispatchToProps = (dispatch) => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(Search);
