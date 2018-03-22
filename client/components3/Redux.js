import React from 'react'
import {createStore, combineReducers} from 'redux'
import StateHistory from './StateHistory'

var defaultState = {
  text: '',
  index: 0
};

const todoReducer = (state = defaultState, action) => {
  switch(action.type) {
    
    case 'ADD':
      var name = action.text.trim();
      if (name === '') {
        return state;
      }
      var newState = Object.assign({}, state)
      newState = {
        text: name,
        index: state.index + 1
      }
      StateHistory.push(newState);
      console.log("Past: ",JSON.stringify(StateHistory.past));
      console.log("Present: ",JSON.stringify(StateHistory.present));
      return newState;
    
    default:
      return state;
  }
};

const store = createStore(todoReducer);

export default store;