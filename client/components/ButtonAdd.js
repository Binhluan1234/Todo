import React from 'react';

export default class ButtonAdd extends React.Component {
  render() {
    return(
      <div>
        <button type="button" onClick={this.props.actionAdd}> &#43;</button>
      </div>
    );
  }
}