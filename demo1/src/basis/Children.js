import React, { Component } from "react";

//获取传入的jsx结构，并且可以任意排序
class Child extends Component {
  componentDidMount(){
    console.log(this.props.children)
  }
  render(){
    return (
      <div>
        <div className='content'>
          {this.props.children[1]}
        </div>
        <div className='content'>
          {this.props.children[2]}
          {this.props.children[3]}
        </div>
        <div className='content'>
          {this.props.children[0]}
        </div>
      </div>
    )
  }
}

export default Child