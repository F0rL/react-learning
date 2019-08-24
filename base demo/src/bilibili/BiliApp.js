import React, { Component } from "react";
import Clock from "./Clock";
import Notime from './Notime'

class BiliApp extends Component {
  render() {
    return (
      <div>
        <title>BiliApp</title>
        <Clock />
        <Notime />
      </div>
    );
  }
}
export default BiliApp;
