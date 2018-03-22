import React from "react";

export class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      massage: ''
    };
  }

  onChangeTextBox(event) {
    this.setState({ massage: event.target.value }, function () {
      this.props.seachTodo(this.state.massage);
    });
  }

  render() {
    return (
      <div>
        <div className="row header">
          <div className="col-xs-11 boxSearch">
            <input className="form-control" type="text" onChange={this.onChangeTextBox.bind(this)}></input>
          </div>
          <div className="col-xs-1">
            <button className="btn btn-primary"
              onClick={() => this.props.addTodo(this.state.massage)}> &#43;
            </button>
          </div>
        </div>
      </div>
    );
  }
}