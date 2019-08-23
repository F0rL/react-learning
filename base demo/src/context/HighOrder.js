//高阶组件
import React, { Component } from "react";

export default (Wrappend, name) => {
  class NewComponent extends Component {
    constructor() {
      super();
      this.state = { data: null };
    }
    UNSAFE_componentWillMount(){
      let data = localStorage.getItem(name)
      this.setState({data})
    }
    render() {
      return <Wrappend data={this.state.data}/>;
    }
  }
  return NewComponent;
};
