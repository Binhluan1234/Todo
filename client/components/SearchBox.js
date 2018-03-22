import React from 'react'
import store from './ReduxApp'

export default class SearchBox extends React.Component {

  // onSearch() {
  //   store.dispatch({
  //     type: 'SEARCH'
  //   })
  // }

  render() {
    return(
      <div>
        <input className="col-xs-10" type="text" onBlur={this.props.onChange} ></input>
        <button type="button" onClick={this.props.actionSeach} className="navbar-button col-xs-2">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}