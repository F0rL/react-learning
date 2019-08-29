import React, { Component } from "react";
import { Input, Button, List, Typography, Icon } from "antd";

//无状态组件，性能较高
const TodoListUI = (props) => {
  return (
    <div className="todoList">
        <div className="todoList__header">
          <Input
            placeholder="请输入内容"
            value={props.inputValue}
            onChange={props.handleInputValue}
          />
          <Button
            onClick={props.handleAddTodo}
            type="primary"
            className="todoList__header_button"
          >
            添加
          </Button>
        </div>
        <div className="todoList__main">
          <List
            bordered
            dataSource={props.list}
            renderItem={(item, index) => (
              <List.Item>
                <Typography.Text mark>[ITEM]</Typography.Text> 
                {item}
                <Icon 
                  type="close" 
                  onClick={(index)=>props.handleDelete(index)}
                />
              </List.Item>
            )}
          />
        </div>
      </div>
  )
} 
// class TodoListUI extends Component {
//   render() {
//     return (
//       <div className="todoList">
//         <div className="todoList__header">
//           <Input
//             placeholder="请输入内容"
//             value={this.props.inputValue}
//             onChange={this.props.handleInputValue}
//           />
//           <Button
//             onClick={this.props.handleAddTodo}
//             type="primary"
//             className="todoList__header_button"
//           >
//             添加
//           </Button>
//         </div>
//         <div className="todoList__main">
//           <List
//             bordered
//             dataSource={this.props.list}
//             renderItem={(item, index) => (
//               <List.Item>
//                 <Typography.Text mark>[ITEM]</Typography.Text> 
//                 {item}
//                 <Icon 
//                   type="close" 
//                   onClick={(index)=>this.props.handleDelete(index)}
//                 />
//               </List.Item>
//             )}
//           />
//         </div>
//       </div>
//     )
//   }
// }

export default TodoListUI