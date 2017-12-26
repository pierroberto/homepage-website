import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

import Navbar from './components/Navbar/Navbar';
import ListView from './components/ListView/ListView';
import Search from './components/Search/Search';
import RaisedButton from 'material-ui/RaisedButton';
import FontAwesome from 'react-fontawesome';
import WOW from 'wowjs';

class App extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

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
                    <input className="app__inputBox" type="text" placeholder="Inserisci città..." />
                    <label className="app__label">Cerca lavoro per città</label>
                  </div>

                  <div className="app__input">
                    <div className="app__wrapper">
                      <div className="app__input">
                        <input
                          className="app__inputBox"
                          type="text"
                          placeholder="Inserisci tipologia lavoro, azienda o settore..."
                        />
                        <label className="app__label">Cerca lavoro per settore o azienda</label>
                      </div>
                      <div className="app__input app__wrapper">
                        <RaisedButton label="vai" style={{ height: 50 }} />
                        {/* <div className="app__button2">
                          <div className="app__textButton">Vai</div>
                        </div> */}
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
            <button className="app__button wow animated bounce">
              <a href="#">La tua azienda qui</a>
            </button>
          </div>
        </section>
        <footer className="footer">
          <div className="row">
            <div className="footer__container">
              <div className="footer__box">
                <div className="footer__topic">
                  <h3 className="footer__title">Sei un candidato?</h3>
                  <ul className="footer__list">
                    <li className="footer__item">
                      <a href="#">Tutte le aziende</a>
                    </li>
                    <li className="footer__item">
                      <a href="#">Cerca lavoro</a>
                    </li>
                  </ul>
                </div>
                <div className="footer__topic">
                  <h3 className="footer__title">Sei un'azienda?</h3>
                  <ul className="footer__list">
                    <li className="footer__item">
                      <a href="#">Come funziona</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer__box">
                <h3 className="footer__title">Jobtome</h3>
                <ul className="footer__list">
                  <li className="footer__item">
                    <a href="#">Chi siamo</a>
                  </li>
                  <li className="footer__item">
                    <a href="#">Lavora con noi</a>
                  </li>
                  <li className="footer__item">
                    <a href="#">Cookie Policy</a>
                  </li>
                  <li className="footer__item">
                    <a href="#">Sitemap</a>
                  </li>
                  <li className="footer__item">
                    <a href="#">Blog</a>
                  </li>
                </ul>
              </div>
              <div className="footer__box">
                <h3 className="footer__title">Contatti</h3>
                <ul className="footer__list">
                  <li className="footer__item">Via Prati Maggi 4</li>
                  <li className="footer__item">6862 Rancate</li>
                  <li className="footer__item">Switzerland</li>
                </ul>
              </div>
              <div className="footer__box">
                <div className="footer__topic">
                  <h3 className="footer__title">Jobtome sui social</h3>
                  <div className="footer__social-Fb footer__social">
                    <a href="#">
                      <div className="footer__socialText">Accedi con Facebook</div>
                    </a>
                  </div>
                  <div className="footer__social-Li footer__social">
                    <a href="#">
                      <div className="footer__socialText">Accedi con Linkedin</div>
                    </a>
                  </div>
                  <div className="footer__social-Go footer__social">
                    <a href="#">
                      <div className="footer__socialText">Accedi con Google</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-nobackground">
            <div className="row">
              <div className="footer__container footer__container-nobackground">
                <div className="footer__topic">
                  <div className="footer__copyright">
                    © 2017 Jobtome International SA, Switzerland. All rights reserved.
                  </div>
                </div>
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
