const winningCombo = [[0,1,2], [3,4,5]];

export var boardReducer = (state=['','','','','','','','',''], action)=>{
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

export var winningStatusReducer = (state = false, action)=>{
  switch (action.type) {
    case 'WIN':
    var {board} = action;
    var won =false;
    for(var i=0; i<winningCombo.length; i++){
      var s1 = board[winningCombo[i][0]];
      var s2 = board[winningCombo[i][1]];
      var s3 = board[winningCombo[i][2]];
      //console.log(s1,s2,s3);
      if(s1 === s2 && s1===s3 && s1!== ''){
        won = true;
      }
    }
    //console.log(won);
      return won;
    default:
      return state;
  }
}
