import React, { Component } from "react";
import HighOrder from './HighOrder'

class InputWithUserName  extends Component {
  render() {
    return <input value={this.props.data} />
  }
}

InputWithUserName = HighOrder(InputWithUserName, 'username')
export default InputWithUserName