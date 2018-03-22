import React from 'react'
import store from './ReduxApp'
import ListItem from './ListItem'

export class List extends React.Component{


  reloadComponent() {
    var items = this.props.items;
    console.log('State:', JSON.stringify(items));
  }

  render() {
    var itemsTmp = [];
    console.log('render:', JSON.stringify(this.props.items));
    this.props.items.forEach((item, index) => {
      if(item.display) {
        itemsTmp.push(<ListItem workName={item.workName} key={index} index={index} status="true"/>);
      }
    })
    return (
      <div>
        {itemsTmp}
        <button onClick={this.reloadComponent.bind(this)}>reload</button>
      </div>
    );
  }
}