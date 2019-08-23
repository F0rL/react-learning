import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Commet from './Commet'

class CommentList extends Component {
  static propTypes  = {
    comments: PropTypes.array,
    onDeleteComment: PropTypes.func
  }
  static defaultProps = {
    comments: []
  }
  handleDeleteComment (index) {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(index)
    }
  }
  render() {
    return (
      <div>
        <p>评论：</p>
        <div className='comment_List'>
          {this.props.comments.map((item, i) =>
            <Commet 
              comment={item} 
              key={i}
              index={i}
              onDeleteComment={this.handleDeleteComment.bind(this)}
              />
          )}
        </div>
      </div>
    )
  }
}

export default CommentList