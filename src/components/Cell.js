import React, {Component} from 'react';
import {connect} from 'react-redux';
//css
import '../styles/cell.css';

//actions
import * as actions from '../actions/actions'

class Cell extends Component {
  onClick(e){
    var {symbol,dispatch,dataId, currentPlayerSymbol, winningStatus} = this.props;
    if(symbol==='' && winningStatus ==='pending'){
      dispatch(actions.changeCell(dataId,currentPlayerSymbol));
      dispatch(actions.played(currentPlayerSymbol));
    }

  }

  render(){

    return(
      <div data={this.props.symbol} className="cell" onClick={this.onClick.bind(this)} >
        {this.props.symbol}
      </div>
    );
  }
}

export default connect((state)=>{
  return {
    currentPlayerSymbol: state.currentPlayerSymbol,
    winningStatus:state.winningStatus
  }
})(Cell);
