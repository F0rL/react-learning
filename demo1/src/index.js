//评论组件案例

import React, { Component} from "react";
import ReactDOM from "react-dom";
import "./demo4.css";



class Container extends Component {
  render () {
    return <div className='container'>container</div>
  }
}

ReactDOM.render(<Container />, document.getElementById("root"));
