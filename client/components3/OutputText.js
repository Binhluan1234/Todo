import React from 'react';
import {connect} from 'react-redux'

class OutputText extends React.Component {
  render() {
    console.log("render");
    return (
      <div>
        <h4>{this.props.todo.text}</h4>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todo: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps,mapDispatchToProps)(OutputText)