import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          time: "19/09/01",
          content: "learn react"
        },
        {
          time: "19/09/01",
          content: "learn vue"
        }
      ],
      inputValue: ""
    };
    this.handleValue = this.handleValue.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  handleAddTodo() {
    let time = new Date().toLocaleDateString();
    let newTodo = { time: time, content: this.state.inputValue };
    this.setState({
      list: [...this.state.list, newTodo],
      inputValue: ""
    });
  }
  handleValue(e) {
    this.setState({
      inputValue: e.target.value
    });
  }
  deleteItem(index) {
    const copyList = [...this.state.list];
    copyList.splice(index, 1);
    this.setState({
      list: copyList
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="input">
          <input value={this.state.inputValue} onChange={this.handleValue} />
          <button onClick={this.handleAddTodo}>add todo</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <TodoItem
                deleteItem={this.deleteItem}
                key={index}
                item={item}
                index={index}
              />
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default TodoList;
