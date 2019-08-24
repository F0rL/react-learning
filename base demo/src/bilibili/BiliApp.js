import React, { Component } from "react";
import Clock from "./Clock";
import Notime from './Notime'
import FucChildComponent from './FucChildComponent'

class BiliApp extends Component {
  render() {
    return (
      <div>
        <title>BiliApp</title>
        <Clock />
        <Notime />
        <FucChildComponent>
          {(name) => (<h1>my name is {name}</h1>)}
        </FucChildComponent>
      </div>
    );
  }
}
export default BiliApp;
