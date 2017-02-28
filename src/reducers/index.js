const winningCombo = [
                      [0,1,2],
                      [3,4,5],
                      [6,7,8],
                      [0,3,6],
                      [1,4,7],
                      [2,5,8],
                      [0,4,8],
                      [6,4,2]
                    ];

export var boardReducer = (state=['','','','','','','','',''], action)=>{
  switch (action.type) {
    case 'CHANGE_CELL':
      var obj = [...state];
      obj[action.id] = action.symbol;
      return obj;
    case 'RESET':
      return ['','','','','','','','',''];
    default:
      return state;
  }
}

export var currentPlayerSymbolReducer = (state='X', action)=>{
  switch (action.type) {
    case 'PLAYED':
      return (state === 'X')? 'O': 'X';
    case 'RESET':
      return 'X';
    default:
      return state;
  }
}

export var winningStatusReducer = (state = false, action)=>{
  switch (action.type) {
    case 'WIN':
      var {board} = action;
      var winningStatus ='pending';
      var gameFinished = true;
      for(var i=0; i<winningCombo.length; i++){
        var s1 = board[winningCombo[i][0]];
        var s2 = board[winningCombo[i][1]];
        var s3 = board[winningCombo[i][2]];
        //console.log(s1,s2,s3);
        if(s1 === s2 && s1===s3 && s1!== ''){
          winningStatus = 'won';
        }

      }
      if(winningStatus!=='won'){
        for(var x=0; x<board.length;x++){
          if(board[x]===''){
            gameFinished = false;
            winningStatus = 'pending';
          }
        }
      }

      return (gameFinished && winningStatus!=='won')? 'draw': winningStatus;
    case 'RESET':
      return 'pending';
    default:
      return state;
  }
}

export var scoreReducer = (state = {player1:0,player2:0}, action)=>{
  switch (action.type) {
    case 'ADD_SCORE':
      var score = {...state};
      if(action.winningStatus==='won'){
        //if plalyer one whos symbol is 'X' has won
        //current player is not the player who made the last move
        if(action.currentPlayerSymbol==='O'){
          score.player1+=1;
        }else if(action.currentPlayerSymbol==='X'){
          score.player2+=1;
        }
      }

      return score;
    default:
      return state;

  }
}
