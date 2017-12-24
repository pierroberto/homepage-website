import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import Navbar from './components/Navbar/Navbar';
import ListView from './components/ListView/ListView';
import Search from './components/Search/Search';
import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar></Navbar>
        <img className="app__home" src={require("./assets/home.jpg")} />
          <section className="app__intro">
          <div className="app__wrapper">
            <h3 className="app__title">Trova il lavoro giusto per te!</h3>
          </div>
          <div className="app__wrapper">
            <div className="app__wrapper">
              <div className="app__input">
                <input className ="app__inputBox" type="text" placeholder="city..."/>
                <label className ="app__label">Title, Skill, Sector</label>
              </div>

              <div className="app__input">
                <div className="app__wrapper">
                  <div className="app__input">
                    <input className ="app__inputBox" type="text" placeholder="title..."/>
                    <label className ="app__label">City</label>
                  </div>
                  <div className="app__input">
                    <RaisedButton primary={true} style={{height: 50, marginLeft: 20}} label="Vai" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          </section>
          <section>
            <div className="list-company">
              <h3>Le nostre aziende</h3>
              <h4>Con chi lavora Jobtome</h4>
              <ListView />
            </div>
          </section>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});
const mapDispatchToProps = (dispatch) => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(App);
