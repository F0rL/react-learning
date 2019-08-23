import React, { Component } from "react";
import AutoFocusInput from "./AutoFocusInput";
import Children from "./Children";
import Dangerous from "./Dangerous";
import Proptype from "./Proptype";

class BasisApp extends Component {
  render() {
    const user = ['name', 'age']
    return (
      <div className="basis">
        <AutoFocusInput />
        <Children>
          <h2>你好</h2>
          <p>新的一天<em>开始了</em></p>
          输入：<input/>
        </Children>
        <Dangerous/>
        <Proptype user={user}/>
      </div>
    );
  }
}

export default BasisApp;
