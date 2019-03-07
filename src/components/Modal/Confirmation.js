import React from 'react';

class Confirmation extends React.Component {
  constructor(){
    super()
  }
  render(){
    return (
      <div className="modal--container">
        <div className="modal--window">
          <div>
          {this.props.content}
          </div>
          <button className="button" onClick={this.props.onConfirmation}>Yes</button>
          <button className="button" onClick={this.props.onClose}>Cancel</button>
        </div>
      </div>
    )
  }
}


export default Confirmation;