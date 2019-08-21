import React, { Component } from 'react'
import Commet from './Commet'

class CommentList extends Component {
  static defaultProps  = {
    comments: []
  }
  render() {
    return (
      <div>
        <p>评论：</p>
        <div className='comment_List'>
          {this.props.comments.map((item, i) =>
            <Commet comment={item} key={i}/>
          )}
        </div>
      </div>
    )
  }
}

export default CommentList