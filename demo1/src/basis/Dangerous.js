import React, { Component } from "react";

//innerHTML 和 style 
class Dangerous extends Component {
  constructor() {
    super();
    this.state = {
      content: `<p>dangerous html by dangerouslySetInnerHTML</p>`,
      style: {
        fontSize: '12px',
        color: 'red'
      }
    };
  }
  changeStyle(){
    this.setState({
      style: {
        fontSize: '18px',
        color: 'blue'
      }
    })
  }
  render() {
    return (
      <div>
        <div
          dangerouslySetInnerHTML={{ __html: this.state.content }}
          style={this.state.style}
        />
        <button onClick={this.changeStyle.bind(this)}>click change</button>
      </div>
    );
  }
}

export default Dangerous;
