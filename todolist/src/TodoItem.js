import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props){
    super(props)
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(){
    const { deleteItem, index } = this.props
    deleteItem(index)
  }
  render() {
    const { time, content } = this.props.item
    return (
      <li className="todo_item">
        <span>时间: {time}</span>
        <span>内容: {content}</span>
        <span onClick={this.handleDelete}>X</span>
      </li>
    );
  }
}

export default TodoItem;
