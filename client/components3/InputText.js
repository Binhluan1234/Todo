import React from 'react'
import {connect} from 'react-redux'

class InputText extends React.Component {
  constructor(Props) {
    super(Props);
    this.state = {
      text: ''
    }
  }

  render() {
    return (

      <div>
        <div>
          <input type="text" onChange={this.onChangeText.bind(this)}></input>
          <button onClick={this.onClickBt.bind(this)}>ADD </button>
        </div>
      </div>
    );
  }

  onChangeText(e) {
    var text = e.target.value;
    this.setState({ text: text }, function () { 
      console.log('onchange: ' + this.state.text);
    });
    
  }

  onClickBt() {
    console.log('onclick');
    this.props.addText(this.state.text);
  }
}

const mapStateToProps = (state) => {
  return {
    text: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addText: (text) => {
      dispatch ({
        type: "ADD",
        text: text
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputText)