import React, { Component } from 'react';
import logo from '../res/logo.svg';
import '../styles/App.css';

//store
import * as store from '../store/config';
import {Provider} from 'react-redux';
var appStore = store.configure({
  currentPlayerSymbol: 'X',
  board:['O','X','O','X','O','','','','']
});
//conponents
import Board from '../components/Board';

class App extends Component {
  render() {

    return (
      <Provider store={appStore}>
        <div className="app">
          <div className="nav-bar">
            <div className="nav-bar-brand">
              <img src={logo} className="App-logo" alt="logo" />
              <h3>Welcome to React</h3>
            </div>
            <div className="nav-bar-links-lis">
              <ul className="nav-bar-links-list">
                <li><a href="/">Login</a></li>|
                <li><a href="/tic-toc">Tic-Toc</a></li>
              </ul>
            </div>

          </div>
          <div className="container">
            <Board/>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
