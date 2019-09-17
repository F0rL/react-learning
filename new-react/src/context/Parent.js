import React, { createContext, Component } from "react";
import "./index.css";

const BatteryContext = createContext();

class Child extends Component {
  static contextType = BatteryContext;
  render() {
    return <div>this msg is from Paren: {this.context}</div>;
  }
}

class Middle extends Component {
  render() {
    return (
      <div>
        <Child />
      </div>
    );
  }
}

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 60
    };

    this.handleNumPlus = this.handleNumPlus.bind(this)
  }

  handleNumPlus() {

    this.setState(state => {
      let newNum = state.num + 1
      return {
        num: newNum
      }
    });
  }
  render() {
    const { num } = this.state;
    return (
      <BatteryContext.Provider value={num}>
        <div className="context_P">
          <p>this is Parent</p>
          <Middle />
          <div>
            <button onClick={this.handleNumPlus}>plus num</button>
          </div>
        </div>
      </BatteryContext.Provider>
    );
  }
}

export default Parent;
