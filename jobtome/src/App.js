import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import Navbar from './components/Navbar/Navbar';
import ListView from './components/ListView/ListView';
import Search from './components/Search/Search';
import RaisedButton from 'material-ui/RaisedButton';
import FontAwesome from 'react-fontawesome';

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
                    <input className="app__inputBox" type="text" placeholder="Città..." />
                    <label className="app__label">Cerca per città</label>
                  </div>

                  <div className="app__input">
                    <div className="app__wrapper">
                      <div className="app__input">
                        <input className="app__inputBox" type="text" placeholder="Cerca..." />
                        <label className="app__label">Tiolo, settore, azienda</label>
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
        <footer className="footer">
          <div className="row">
            <div className="footer__container">
              <div className="footer__box">
                <div className="footer__topic">
                  <h3 className="footer__title">Sei un candidato?</h3>
                  <ul className="footer__list">
                    <li className="footer__item">Tutte le aziende</li>
                    <li className="footer__item">Cerca lavoro</li>
                  </ul>
                </div>
                <div className="footer__topic">
                  <h3 className="footer__title">Sei un'azienda?</h3>
                  <ul className="footer__list">
                    <li className="footer__item">Come funziona</li>
                  </ul>
                </div>
              </div>
              <div className="footer__box">
                <h3 className="footer__title">Jobtome</h3>
                <ul className="footer__list">
                  <li className="footer__item">Chi siamo</li>
                  <li className="footer__item">Lavora con noi</li>
                  <li className="footer__item">Cookie Policy</li>
                  <li className="footer__item">Sitemap</li>
                  <li className="footer__item">Blog</li>
                </ul>
              </div>
              <div className="footer__box">
                <h3 className="footer__title">Contatti</h3>
                <ul className="footer__list">
                  <li className="footer__item">Indirizzo</li>
                  <li className="footer__item">Numero</li>
                </ul>
              </div>
              <div className="footer__box">
                <div className="footer__topic">
                  <h3 className="footer__title">Jobtome sui social</h3>
                  <div className="footer__social-Fb footer__social">
                    <div className="footer__socialText">Accedi con Facebook</div>
                  </div>
                  <div className="footer__social-Li footer__social">
                    <div className="footer__socialText">Accedi con Linkedin</div>
                  </div>
                  <div className="footer__social-Go footer__social">
                    <div className="footer__socialText">Accedi con Google</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-nobackground">
            <div className="row">
              <div className="footer__container footer__container-nobackground">
                <div className="footer__topic">© 2017 Jobtome</div>
                <div className="footer__topic">
                  <FontAwesome className="footer__icons" name="facebook" />
                  <FontAwesome className="footer__icons" name="twitter" />
                  <FontAwesome className="footer__icons" name="linkedin" />
                  <FontAwesome className="footer__icons" name="youtube" />
                  <FontAwesome className="footer__icons" name="instagram" />
                  <FontAwesome className="footer__icons" name="pinterest" />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(App);
