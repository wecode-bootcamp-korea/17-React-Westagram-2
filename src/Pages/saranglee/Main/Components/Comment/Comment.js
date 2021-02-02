import React, { Component } from 'react';

import './Comment.scss';

class Comment extends Component {
  render() {
    return (
      <>
      {this.props.commentList.map((comment, index) => {
        return <div key={index} className="comment_written">
          <a className="user_id" href="https://www.instagram.com/sadfrogmeme/">pepe_sad</a>
          <p className="comment_text">{comment}</p>
        </div>
      })}
      </>
    );
  }
}

export default Comment;