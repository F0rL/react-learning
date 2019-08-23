import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from './App';

const appState = {
  title: {
    text: "React.js redux",
    color: "red"
  },
  content: {
    text: "React.js content",
    color: "blue"
  }
};
//观察者模式
function createStore(state, stateChanger) {
  const listeners = [];
  const subscribe = listener => listeners.push(listener);
  const getState = () => state;
  const dispatch = action => {
    state = stateChanger(state, action); //覆盖原对象
    listeners.forEach(listener => listener());
  };
  return { getState, dispatch, subscribe };
}

function renderApp(newAppState, oldAppState = {}) {
  if (newAppState === oldAppState) return;
  console.log("render app...");
  renderTitle(newAppState.title, oldAppState.title);
  renderContent(newAppState.content, oldAppState.content);
}

function renderTitle(newTitle, oldTitle) {
  if (newTitle === oldTitle) return; //数据不变就返回
  console.log("render title...");
  const titleDom = document.getElementById("title");
  titleDom.innerHTML = newTitle.text;
  titleDom.style.color = newTitle.color;
}

function renderContent(newContent, oldContent) {
  if (newContent === oldContent) return; //数据不变就返回
  console.log("render content...");
  const contentDom = document.getElementById("content");
  contentDom.innerHTML = newContent.text;
  contentDom.style.color = newContent.color;
}
//专门负责修改
function stateChanger(state, action) {
  switch (action.type) {
    case "UPDATE_TITLE_TEXT":
      return {
        ...state,
        title: {
          text: action.text
        }
      };
    case "UPDATE_TITLE_COLOR":
      return {
        ...state,
        title: {
          color: action.color
        }
      };
    default:
      return state;
  }
}

const store = createStore(appState, stateChanger);
let oldState = store.getState()
store.subscribe(() => {
  const newState = store.getState()
  renderApp(newState, oldState)
  oldState = newState
});

renderApp(store.getState());
store.dispatch({ type: "UPDATE_TITLE_TEXT", text: "修改title text" }); // 修改标题文本
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'green' }) // 修改标题颜色