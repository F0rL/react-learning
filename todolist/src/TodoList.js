import React, { Component } from "react";
import TodoItem from "./TodoItem";
import uuid from "uuid";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: uuid(),
          time: "19/09/01",
          content: "learn react"
        },
        {
          id: uuid(),
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
    let newTodo = { id: uuid(), time: time, content: this.state.inputValue };
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
        <TransitionGroup className="todo_list">
          {this.state.list.map((item, index) => {
            return (
              <CSSTransition
                key={item.id}
                timeout={500}
                classNames="fade"
              >
                <TodoItem
                  deleteItem={this.deleteItem}
                  key={item.id}
                  item={item}
                  index={index}
                />
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </React.Fragment>
    );
  }
}

export default TodoList;
