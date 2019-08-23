import React, { Component } from "react";
import PropTypes from 'prop-types'

class Title extends Component {
  static contextTypes = {
    themeColor: PropTypes.string
  }
  render() {
    return (
      <div>
        <h1 style={{color: this.context.themeColor}}>标题</h1>
      </div>
    );
  }
}

export default Title;
