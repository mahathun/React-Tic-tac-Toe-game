import React, {Component} from 'react';
import {connect} from 'react-redux';

//css
import '../styles/board.css';
//components
import Cell from '../components/Cell';


class Board extends Component {


  render(){

    //console.log('winningStatus: ',this.props.winningStatus);
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
    </div>
    );
  }
}

export default connect((state)=>{
  return {board:state.board, winningStatus:state.winningStatus}
})(Board);

// export default connect((state)=>{
//   return {
//     showCompleted:state.showCompleted,
//     searchText:state.searchText,
//     todos:state.todos
//   }
// })(TodoList);
