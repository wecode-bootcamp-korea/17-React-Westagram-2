import React, { Component } from 'react';

import './Comment.scss';

class Comment extends Component {
  render() {
    return (
      <>
      {this.props.commentList.map((comment, index) => {
        return <div key={index} className="comment-written">
          <a className="user-id" href="https://www.instagram.com/sadfrogmeme/">pepe_sad</a>
          <p className="comment-text">{comment}</p>
        </div>
      })}
      </>
    );
  }
}

export default Comment;