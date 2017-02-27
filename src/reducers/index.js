
export var boardReducer = (state=['','','','','','','','',''], action)=>{
  console.log('boardReducer');
  switch (action.type) {
    case 'CHANGE_CELL':
      var obj = [...state];
      obj[action.id] = action.symbol;
      return obj;
    default:
      return state;
  }
}

export var currentPlayerSymbolReducer = (state='X', action)=>{
  switch (action.type) {
    case 'PLAYED':
      return (state === 'X')? 'O': 'X';
    default:
      return state;
  }
}
