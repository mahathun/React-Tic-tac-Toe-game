import React, {Component} from 'react';
import {connect} from 'react-redux';

//css
import '../styles/board.css';
//components
import Cell from '../components/Cell';
import Popup from '../components/Popup';

//actions
import * as actions from '../actions/actions';

class Board extends Component {

  onPlayAgain(){
    var {dispatch,winningStatus,currentPlayerSymbol} = this.props;
    dispatch(actions.addScore(winningStatus, currentPlayerSymbol))
    dispatch(actions.reset());

  }

  render(){
    //console.log('winningStatus: ',this.props.winningStatus);
    var {winningStatus} = this.props;
    return(
    <div className="tic-toc">
      <div className="side-space">

      </div>
      <div className="board">
        {this.props.board.map((cell,i)=>{
          return (
              <Cell key={i} dataId={i} symbol={this.props.board[i]}/>
          );
        })}

      </div>
      <div className="side-space">
      </div>
      <Popup show={
        (winningStatus==='won')?true:(winningStatus==='draw')?true:false
      } onConfirm={this.onPlayAgain.bind(this)} message={
        (winningStatus==='won')?'Congratulations, you have won this game. Try playing another one.':'Ohhh, it\'s a draw. Try playing another one.'
      } title={
        (winningStatus==='won')?"Tic-Tac-Toe - Congratulations !!! You have won":'Tic-Tac-Toe - It\'s a draw'
      }/>
    </div>
    );
  }
}

export default connect((state)=>{
  return {board:state.board, winningStatus:state.winningStatus,currentPlayerSymbol:state.currentPlayerSymbol}
})(Board);
