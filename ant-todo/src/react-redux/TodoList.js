import React, { Component } from "react";
import { connect } from "react-redux";

//无状态组件
const TodoList = (props) => {
  const {
    inputValue,
    list,
    handleInputChange,
    handleClick,
    deleteItem
  } = props;
  return (
    <div>
      <div>
        <input value={inputValue} onChange={handleInputChange} />
        <button onClick={handleClick}>添加</button>
      </div>
      <ul>
        {list.map((todo, index) => {
          return (
            <div key={index}>
              <li>{todo.content}</li>
              <span onClick={() => deleteItem(index)}>删除</span>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

// class TodoList extends Component {
//   render() {
//     const {
//       inputValue,
//       list,
//       handleInputChange,
//       handleClick,
//       deleteItem
//     } = this.props;
//     return (
//       <div>
//         <div>
//           <input value={inputValue} onChange={handleInputChange} />
//           <button onClick={handleClick}>添加</button>
//         </div>
//         <ul>
//           {list.map((todo, index) => {
//             return (
//               <div key={index}>
//                 <li>{todo.content}</li>
//                 <span onClick={() => deleteItem(index)}>删除</span>
//               </div>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }
const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleInputChange(e) {
      const action = {
        type: "change_input_value",
        inputValue: e.target.value
      };
      dispatch(action);
    },
    handleClick() {
      const action = {
        type: "add_input_value"
      };
      dispatch(action);
    },
    deleteItem(id) {
      const action = {
        type: "delete_value",
        id
      };
      dispatch(action);
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
