import React from "react";
import ListItem from "./ListItem"

export class List extends React.Component {
  render() {
    var itemsTmp = [];
    if (this.props.isSearch) {
      itemsTmp.push(<h4 key={this.props.searchKey}><small>search</small> {this.props.searchKey}</h4>);
      var keySearch = this.props.searchKey;
      this.props.items.forEach((item, index) => {
        if (item.name.indexOf(keySearch) !== -1) {
          itemsTmp.push(<ListItem name={item.name} key={index} index={index} status={item.status} />);
        }
      });
    }
    else {
      this.props.items.forEach((item, index) => {
        if (item.display) {
          itemsTmp.push(<ListItem name={item.name} key={index} index={index} status={item.status} />);
        }
      });
    }
    return (
      <div className="List">
        {itemsTmp}
      </div>
    );
  }
}
