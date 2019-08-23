import React, { Component } from "react";
import PropTypes from 'prop-types'
import "./commetInput.css";

class CommentInput extends Component {
  static propTypes = {
    onSubmit: PropTypes.func
  }
  constructor() {
    super();
    this.state = {
      username: "",
      content: ""
    };
  }
  componentDidMount(){
    this.textarea.focus()
  }
  componentWillMount(){
    this._loadLocal()
  }
  handleUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  _loadLocal () {
    const username = localStorage.getItem('username')
    if(username) {
      this.setState({username})
    }
  }
  _saveToLocal(username){
    localStorage.setItem('username', username)
  }

  handleUsernameBlur(e) {
    this._saveToLocal(e.target.value)
  }
  handleContent(e) {
    this.setState({
      content: e.target.value
    });
  }
  handleSubmit(){
    if(this.props.onSubmit) {
      this.props.onSubmit({
        username: this.state.username, 
        content: this.state.content,
        createdTime: +new Date()
      })
    }
    this.setState({content: ''})
  }
  render() {
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">用户名：</span>
          <div className="comment-field-input">
            <input
              value={this.state.username}
              onChange={this.handleUsername.bind(this)}
              onBlur={this.handleUsernameBlur.bind(this)}
            />
          </div>
        </div>
        <div className="comment-field">
          <span className="comment-field-name">评论内容：</span>
          <div className="comment-field-input">
            <textarea
              value={this.state.content}
              onChange={this.handleContent.bind(this)}
              ref={textarea => this.textarea = textarea}
            />
          </div>
        </div>
        <div className="comment-field-button">
          <button onClick={this.handleSubmit.bind(this)}>发布</button>
        </div>
      </div>
    );
  }
}

export default CommentInput;
