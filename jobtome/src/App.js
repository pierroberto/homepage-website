import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar></Navbar>
        <section>
          <img className="app__home" src={require("./assets/home.jpg")} />
          <div className="app__wrapper">
            <div className="app__input">
              <input className ="app__inputBox" type="text" placeholder="city..."/>
              <label className ="app__label">Title, Skill, Sector, Company name</label>
            </div>
            <div className="app__input">
              <input className ="app__inputBox" type="text" placeholder="title..."/>
              <label className ="app__label">City</label>
              <button className ="app__button">Vai</button>
            </div>
          </div>
        </section>
        <div className="app__container">
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
