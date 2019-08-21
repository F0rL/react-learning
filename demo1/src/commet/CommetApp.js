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
  handleSubmit(e){
    //不建议直接往state.comments 数组里面插入数据
    
    this.state.comments.push(e)
    console.log(this.state.comments)
    this.setState({
      comments: this.state.comments
    })
  }
  render() {
    return (
      <div className="commentApp">
        <CommentInput onSubmit={this.handleSubmit.bind(this)}/>
        <CommentList comments={this.state.comments}/>
      </div>
    );
  }
}
