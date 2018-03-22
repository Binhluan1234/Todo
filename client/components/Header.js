import React from 'react';
import SearchBox from './SearchBox'
import ButtonAdd from './ButtonAdd'
import store from './ReduxApp'
import ListTodo from './List'

export class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      workName: ''
    };
  }
 
  onTextBoxChanged(e) {
    console.log("Header.onSearchBoxChanged");
    var name = e.target.value;
    this.setState({workName: name});
  }

  onSearch() {
    // console.log("Header.onSearch");
    // store.dispatch({
    //   type: 'SEARCH',
    //   workName: this.state.workName
    // });
  } 
  
  render() {
    return (
      <div className="row col-xs-12">
        <div className="col-md-10 col-xs-8">
          <SearchBox onChange={this.onTextBoxChanged.bind(this)} actionSeach={this.onSearch.bind(this)} />
        </div>
        <div className="col-md-2 col-xs-4">
          <button type="button" onClick={this.props.addWorkName(this.state.workName)}> &#43;</button>
        </div>
      </div>
    );
  }

}