import React from 'react'
import InputText from './InputText'
import OutputText from './OutputText'

export default class App extends React.Component {
  render() {
    console.log("render");
    return (
      <div>
        <h1>Hello </h1>
        <InputText />
        <OutputText />
      </div>
    );
  }
}