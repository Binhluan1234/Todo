import React from "react";
import { createStore, combineReducers } from "redux";

var defaultState = {
  items: [
    { name: 'abc', status: true, display: true }
  ],
  isSearch: false,
  searchKey: ''
};

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {

    case "ADD_WORK":
      var name = action.name.trim();
      if (name === '') {
        return state;
      }
      newState = Object.assign({}, state, newState)
      newState = {
        items: [
          ...state.items,
          {
            name: name,
            status: false,
            display: true
          }
        ]
      }
      return newState;

    case "SEARCH_WORK":
      var name = action.name.trim();
      if (name === '') {
        newState = {
          isSearch: false,
          searchKey: name,
          items: [...state.items]
        }
        return newState;
      }
      var newState = Object.assign({}, state);
      newState = {
        isSearch: true,
        searchKey: name,
        items: [...state.items]
      }
      return newState;

    case "CHANGE_STATUS":
      var newState = Object.assign({}, state, newState);
      newState.items[action.index].status = !newState.items[action.index].status;
      return newState;

    case "DEL_ITEM":
      var newState = Object.assign({}, state, newState);
      newState = {
        items: [
          ...state.items.slice(0, action.index),
          ...state.items.slice(action.index + 1)
        ]
      }
      console.log('State:', JSON.stringify(state));
      return newState;

    default:
      return state;
  }
};

const store = createStore(
  combineReducers({ todo: todoReducer }),
  {}
);

export default store;