import React, { Component } from "react";
import PropTypes from 'prop-types'

//innerHTML 和 style 
class Proptype extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  }
  render() {
    const {user} = this.props
    console.log(this.props)
    return (
      <div>
        <p>proptype</p>
        <h2>{user.name}</h2>
        <h2>{user.age}</h2>
      </div>
    );
  }
}

export default Proptype;
