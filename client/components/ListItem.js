import React from 'react'
import Message from './Message'
import Status from './Status'

export default class ListItem extends React.Component{
  render() {
    return(
      <div className="row col-xs-12">
        <div className="col-xs-8">
          <Message message={this.props.workName}/>
        </div>
        <div className="col-xs-4">
          <Status/>
        </div>
      </div>
    );
  }
}