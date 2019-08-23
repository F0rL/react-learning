import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';

const appState = {
  title: {
    text: 'React.js redux',
    color: 'red'
  },
  content: {
    text: 'React.js content',
    color: 'blue'
  }
}
//观察者模式
function createStore (state, stateChanger) {
  const listeners = []
  const subscribe = (listener) => listeners.push(listener)
  const getState = () => state
  const dispatch = (action) => {
    stateChanger(state, action)
    listeners.forEach(listener => listener())
  }
  return { getState, dispatch, subscribe }
}

//专门负责修改
function stateChanger (state, action) {
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      state.title.text = action.text
      break
    case 'UPDATE_TITLE_COLOR':
      state.title.color = action.color
      break
    default:
      break
  }
}

const store = createStore(appState, stateChanger)
store.subscribe(() => renderApp(store.getState()))


function renderApp(appState) {
  renderTitle(appState.title)
  renderContent(appState.content)
}

function renderTitle(title) {
  const titleDom = document.getElementById('title')
  titleDom.innerHTML = title.text
  titleDom.style.color = title.color
}

function renderContent(content) {
  const contentDom = document.getElementById('content')
  contentDom.innerHTML = content.text
  contentDom.style.color = content.color
}

renderApp(store.getState())
store.dispatch({type: 'UPDATE_TITLE_TEXT', text: '修改title text'})