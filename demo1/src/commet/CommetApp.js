import React, { Component } from "react";
import "./commentApp.css";
import CommentInput from "./CommetInput";
import CommentList from "./CommentList";

export default class CommentApp extends Component {
  constructor(){
    super()
    this.state = {
      comments: []
    }
  }
  componentWillMount() {
    this._loadComments()
  }
  _loadComments () {
    let comments = localStorage.getItem('comments')
    if(comments) {
      comments = JSON.parse(comments)
      this.setState({comments})
    }
  }
  _saveComments (comments) {
    localStorage.setItem('comments', JSON.stringify(comments))
  }
  handleSubmit(e){
    //不建议直接往state.comments 数组里面插入数据
    if (!e) return
    if (!e.username) return alert('请输入用户名')
    if (!e.content) return alert('请输入评论内容')
    const comments = this.state.comments
    comments.push(e)
    this.setState({comments})
    this._saveComments(comments)
  }

  handleDeleteComment (index) {
    const comments = this.state.comments
    comments.splice(index, 1)
    this.setState({ comments })
    this._saveComments(comments)
  }
  render() {
    return (
      <div className="commentApp">
        <CommentInput onSubmit={this.handleSubmit.bind(this)}/>
        <CommentList 
          comments={this.state.comments}
          onDeleteComment={this.handleDeleteComment.bind(this)}
          />
      </div>
    );
  }
}
