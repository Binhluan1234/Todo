import React from 'react'
import { connect } from 'react-redux'

import {Header} from './Header'
import { List } from './List'

class App extends React.Component {

  render() {
    console.log("render App");
    return (
      <div className="col-md-8 col-sm-10 col-xs-12 col-md-offset-2 col-sm-offset-1">
        <Header addWorkName={this.props.addWorkName}/>
        <List items={this.props.items} />
        <div style={{ textAlign: 'center' }}>
          <h1>Hello World</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.todo.items
  }
}

const mapDispatchToProps = (dispatch) => { 
  return {
    addWorkName: (name) => {
      dispatch({
        type: 'ADDTODO',
        workName: name
      });
    }
    // addTodo: (name) => {
    //   dispatch({
    //     type: "ADD_WORK",
    //     name: name
    //   });
    // },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);