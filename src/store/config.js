
import * as Redux from 'redux';
import {boardReducer, currentPlayerSymbolReducer} from '../reducers/';



export var configure = (initialState)=>{
  var reducer = Redux.combineReducers({
    currentPlayerSymbol: currentPlayerSymbolReducer,
    board: boardReducer
  });

  var store = Redux.createStore(reducer,initialState);
  return store;
}




// import * as redux from 'redux';
// import thunk from 'redux-thunk';
// var {showCompletedReducer, searchTextReducer, todosReducer, authReducer} = require('reducers');
//
// export var configure = (initialState={})=>{
//   var reducer = redux.combineReducers({
//     showCompleted: showCompletedReducer,
//     searchText: searchTextReducer,
//     todos:todosReducer,
//     auth:authReducer,
//   });
//
//   var store = redux.createStore(reducer, initialState, redux.compose(
//     redux.applyMiddleware(thunk),
//     window.devToolsExtension?window.devToolsExtension(): f=>f
//   ));
//
//   return store;
// };
