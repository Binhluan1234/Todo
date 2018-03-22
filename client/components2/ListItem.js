import React from 'react'
import { connect } from "react-redux";

class ListItem extends React.Component {
  render() {
    return (
      <div className="row itemList">
        <div className="col-xs-1 checkbox">
          <input type="checkbox" checked={this.props.status}
            onChange={() => this.props.changeStatus(this.props.index)} />
        </div>
        <div className="col-xs-10">
          <h4> {this.props.name} </h4>
        </div>
        <div className="col-xs-1">
          <button className="btn btn-danger btn-sm"
            onClick={() => this.props.delItem(this.props.index)}> &#45;
          </button>
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeStatus: (index) => {
      dispatch({
        type: "CHANGE_STATUS",
        index: index
      });
    },
    delItem: (index) => {
      dispatch({
        type: "DEL_ITEM",
        index: index
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);