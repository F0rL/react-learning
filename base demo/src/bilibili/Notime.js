//高阶函数范例
import React, { Component } from 'react'
import TimeWrappend from './hoc/TimeWrappend'

class Notime extends Component {
  render(){
    return (
      <div>
        <p>notime</p>
        <p>by hoc</p>
        <h2>{this.props.time.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

Notime = TimeWrappend(Notime)

export default Notime
