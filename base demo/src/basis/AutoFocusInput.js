import React, { Component } from "react";

//加载后自动焦距
class AutoFocusInput extends Component {
  componentDidMount() {
    this.input.focus()
  }
  render(){
    return (
      <input ref={input => this.input = input} />
    )
  }
}

export default AutoFocusInput