import React,{Component} from 'react';
import {connect} from 'react-redux';

//css
import '../styles/scoreboard.css';

class Scoreboard extends Component {
  render(){
    return (
      <div className="scoreboard">
        <div className="playerScoreboard">
          X : {this.props.score.player1}

        </div>
        <div className="playerScoreboard">
          O : {this.props.score.player2}
        </div>
      </div>
    );
  }
}

export default connect((state)=>{
  return {
    score:state.score,
  }
})(Scoreboard);
