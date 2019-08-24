import React, { Component } from 'react'

class FucChildComponent extends Component {
  render() {
    return (
      <div>
        {this.props.children('kuma')}
      </div>
    )
  }
}

export default FucChildComponent