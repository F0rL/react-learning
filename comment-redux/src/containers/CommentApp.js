import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import './commentApp.css'
export default class CommentApp extends Component {
  render() {
    return (
      <div className='commentApp'>
        <CommentInput />
        <CommentList />
      </div>
    )
  }
}