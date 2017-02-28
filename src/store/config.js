
import * as Redux from 'redux';
import {boardReducer, currentPlayerSymbolReducer, winningStatusReducer} from '../reducers/';



export var configure = (initialState)=>{
  var reducer = Redux.combineReducers({
    currentPlayerSymbol: currentPlayerSymbolReducer,
    board: boardReducer,
    winningStatus: winningStatusReducer
  });

  var store = Redux.createStore(reducer,initialState);
  return store;
}
