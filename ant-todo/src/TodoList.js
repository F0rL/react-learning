import React, { Component } from "react";
import "./TodoList.css";
import store from "./store";
import {getInputChangeAction, getAddItemAction, getDeleteItemAction} from './store/actionCreators'
import TodoListUI from './TodoListUI'
import axios from 'axios'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputValue = this.handleInputValue.bind(this);
    this.changeInputValue = this.changeInputValue.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    store.subscribe(this.changeInputValue);
  }

  componentDidMount(){
    
  }

  handleInputValue(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action);
  }
  changeInputValue() {
    this.setState(store.getState());
  }
  handleAddTodo() {
    const action = getAddItemAction()
    store.dispatch(action);
  }
  handleDelete(index){
    const action = getDeleteItemAction(index)
    store.dispatch(action);
  }

  render() {
    return <TodoListUI 
      inputValue={this.state.inputValue}
      list = {this.state.list}
      handleInputValue={this.handleInputValue}
      handleAddTodo={this.handleAddTodo}
      handleDelete={this.handleDelete}
    />
  }
}

export default TodoList;
