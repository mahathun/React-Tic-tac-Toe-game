import React, {Component} from 'react';
import '../styles/popup.css';

class Popup extends Component {
  render(){
    if(this.props.show){
      return (
        <div ref='popup' className="popup">
          <div className="messageHeader">
            <div className="title">
              {this.props.title}
            </div>
          </div>
          <div className="messageBody">
            {this.props.message}
          </div>
          <div className="messageFooter">
            <a href="#" className="button" onClick={this.props.onConfirm}>{this.props.confirmText}</a>

          </div>
        </div>
      );
    }else{
      return null;
    }
  }
}
Popup.defaultProps = {
  confirmText:'Okay',
  closeText:'Close',
  message: 'This is a popup',
  title: 'This is a title'
}

export default Popup;
