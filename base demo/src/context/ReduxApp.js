import React, { Component } from "react";
import PropTypes from 'prop-types'
//import InputWithUserName from './InputWithUserName'
import Header from './Header'
import Main from './Main'
class ReduxApp extends Component {
  static childContextTypes = {
    themeColor: PropTypes.string
  }
  constructor(){
    super()
    this.state = {themeColor: 'red'}
  }
  getChildContext(){
    return {themeColor: this.state.themeColor}
  }
  componentDidMount(){
    this.setState({themeColor: 'blue'})
  }
  render() {
    return (
      <div className="redux">
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default ReduxApp;
