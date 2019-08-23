import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

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

//专门负责修改
function dispatch (action) {
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      appState.title.text = action.text
      break
    case 'UPDATE_TITLE_COLOR':
      appState.title.color = action.color
      break
    default:
      break
  }
}

dispatch({type: 'UPDATE_TITLE_TEXT', text: '修改title text'})

renderApp(appState)