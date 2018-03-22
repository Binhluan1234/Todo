import React from "react";
import { connect } from "react-redux";

import { List } from './List';
import { Main } from './Main';

class App extends React.Component {
  render() {
    console.log("render");
    return (
      <div className="container" className="col-md-6 col-md-offset-3 col-sm-12 col-xs-12">
        <Main addTodo={this.props.addTodo} seachTodo={this.props.seachTodo} />
        <List items={this.props.todo.items} isSearch={this.props.todo.isSearch} searchKey={this.props.todo.searchKey} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todo: state.todo
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (name) => {
      dispatch({
        type: "ADD_WORK",
        name: name
      });
    },
    seachTodo: (name) => {
      dispatch({
        type: "SEARCH_WORK",
        name: name
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);