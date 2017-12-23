import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <div className="App__container">
          <Search />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});
const mapDispatchToProps = (dispatch) => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(App);