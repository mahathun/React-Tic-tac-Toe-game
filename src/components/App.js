import React, { Component } from 'react';
import logo from '../res/logo.svg';
import '../styles/App.css';
import watch from 'redux-watch';

//store
import * as store from '../store/config';
import {Provider} from 'react-redux';

//actions
import * as actions from '../actions/actions';
//game

var appStore = store.configure({
  currentPlayerSymbol: 'X',
  board:['','','','','','','','',''],
  winningStatus:false,
});

//watching for board changes
var w = watch(appStore.getState, 'board');

//check for a winning combination
appStore.subscribe(w((newVal, oldVal, objectPath) => {
  appStore.dispatch(actions.win(newVal));
  // admin.name changed from JP to JOE
}))

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
              <h3>Welcome to Tic-Toc </h3><em> (developed using React)</em>
            </div>
            <div className="nav-bar-links-lis">
              <ul className="nav-bar-links-list">
                {/* <li><a href="/">Login</a></li>|
                <li><a href="/tic-toc">Tic-Toc</a></li> */}
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
