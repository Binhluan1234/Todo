import React from 'react'
import { createStore } from 'redux';

var defaultState = {
  todo: {
    items: [
      { workName: 'lau nhà', status: false, display: true }

    ]
  }
};

function todoApp(state = defaultState, action) {
  // Add the reducer logic
  switch (action.type) {
    case 'ADDTODO':
      var newState = Object.assign({}, state);
      newState.todo.items.push({
        workName: action.workName,
        status: false,
        display: true
      });

      // newState = {
      //   todo: {
      //     items: [
      //       ...state.todo.items,
      //       {
      //         workName: action.workName,
      //         status: false,
      //         display: true
      //       }
      //     ]
      //   }
      // }

      console.log('State:', JSON.stringify(state));
      return newState;
    case 'SEARCH':
      var newdisplayStatus = false;
      if (action.workName == '') {
        console.log("NOT SEARCH");
        newdisplayStatus = true;
      }
      var newState = Object.assign({}, state);
      newState.todo.items.forEach((item, index) => {
        if (action.workName !== item.workName) {
          newState.todo.items[index].display = newdisplayStatus;
        }
      });
      console.log('State:', JSON.stringify(newState));
      return newState;
    default:
      return state;
  }
}

const store = createStore(todoApp, defaultState);

export default store; 