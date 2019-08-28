import React, { Component } from "react";
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete() {
    const { deleteItem, index } = this.props;
    deleteItem(index);
  }
  render() {
    const { time, content } = this.props.item;
    const { test } = this.props
    return (
      <li className="todo_item">
        <span>{test}: {time}</span>
        <span>内容: {content}</span>
        <span onClick={this.handleDelete}>X</span>
      </li>
    );
  }
}

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
  deleteItem: PropTypes.func,
  index: PropTypes.number,
  test: PropTypes.string.isRequired
};

//默认值
TodoItem.defaultProps = {
  test: '年月日'
}

export default TodoItem;
