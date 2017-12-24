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
        <Navbar />
        <section className="app__intro">
          <div className="app_container">
            <div className="app__box">
              <div className="app__wrapper">
                <h1 className="app__title">Trova il lavoro giusto per te!</h1>
              </div>
              <div className="app__wrapper">
                <div className="app__wrapper">
                  <div className="app__input">
                    <input className="app__inputBox" type="text" placeholder="city..." />
                    <label className="app__label">Title, Skill, Sector</label>
                  </div>

                  <div className="app__input">
                    <div className="app__wrapper">
                      <div className="app__input">
                        <input className="app__inputBox" type="text" placeholder="title..." />
                        <label className="app__label">City</label>
                      </div>
                      <div className="app__input">
                        <RaisedButton primary style={{ height: 50, marginLeft: 20 }} label="Vai" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img className="app__home" src={require('./assets/home.jpg')} />
          </div>
        </section>
        <section className="app__companies">
          <div className="app__companyList">
            <h1 className="app__title">Le nostre aziende</h1>
            <h4 className="app__title">Con chi lavora Jobtome</h4>
            <ListView />
            <button className="app__button">La tua azienda qui</button>
          </div>
        </section>
        <div className="row">
          <footer className="footer">
            <div className="footer__container">
              <div className="footer__box">
                <div className="footer__topic">
                  <h3 className="footer__title">Sei un candidato?</h3>
                  <ul className="footer__list">
                    <li className="footer__item">Tutte le aziende</li>
                    <li className="footer__item">Cerca lavoro</li>
                  </ul>
                  <div className="footer__topic">
                    <ul>
                      <h3>Sei un'azienda?</h3>
                      <li>Come funziona</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer__box">
                <h3>Jobtome</h3>
                <ul>
                  <li>Chi siamo</li>
                  <li>Lavora con noi</li>
                  <li>Cookie Policy</li>
                  <li>Sitemap</li>
                  <li>Blog</li>
                </ul>
              </div>
              <div className="footer__box">
                <h3>Contatti</h3>
                <ul>
                  <li>Indirizzo</li>
                  <li>Numero</li>
                </ul>
              </div>
              <div className="footer__box">
                <div className="footer__topic" />
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(App);
