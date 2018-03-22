import React from 'react'

export default class Message extends React.Component {
  render() {
    return(
      <div>
        <h5><span>&#43; </span>{this.props.message}</h5>
      </div>
    );
  }
}