//组件的初级构建，传参，方法，列表

import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import "./demo3.css";

class Header extends Component {
  render() {
    return (
      <div>
        <h1>React header</h1>
      </div>
    );
  }
}
// useState 函数式组件
const ShowWord = function() {
  const [isShow, setShow] = useState(true);
  return (
    <div>
      <h2>React content</h2>
      <p>{isShow ? <span>true show</span> : null}</p>
      <button onClick={() => setShow(!isShow)}>click show</button>
    </div>
  );
};

//setState && 传入参数
class LikeButton extends Component {
  constructor() {
    super();
    this.state = { isLike: false };
  }

  handleClick() {
    this.setState({
      isLike: !this.state.isLike
    });
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    const word = this.props.word || { likeText: "取消", unlikeText: "点赞" };

    return (
      <button onClick={this.handleClick.bind(this)}>
        {this.state.isLike ? word.likeText : word.unlikeText} 👍
      </button>
    );
  }
}

const users = [
  { username: "Jerry", age: 21, gender: "male" },
  { username: "Duncan", age: 22, gender: "male" },
  { username: "Lily", age: 19, gender: "female" },
  { username: "Lucy", age: 20, gender: "female" }
];

class UserItem extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="user_item">
        <div>name: {user.user}</div>
        <div>age: {user.age}</div>
        <div>gender: {user.gender}</div>
      </div>
    );
  }
}

class User extends Component {
  render() {
    return (
      <div className="user">
        {users.map((user, i) => (
          <UserItem user={user} key={i} />
        ))}
      </div>
    );
  }
}

const Container = function() {
  return (
    <div className="container">
      <Header />
      <ShowWord />
      <LikeButton
        word={{ likeText: "不点赞", unlikeText: "再点赞" }}
        onClick={() => console.log("click this button")}
      />
      <User />
    </div>
  );
};

ReactDOM.render(<Container />, document.getElementById("root"));
