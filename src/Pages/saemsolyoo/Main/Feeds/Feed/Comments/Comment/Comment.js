import React, { Component } from "react";
import "./Comment.scss";

class Comment extends Component {
  render() {
    return (
      <>
        {this.props.commentList.map((comment) => {
          return (
            <li key={comment.id}>
              <a href="#">{comment.userName}</a>
              <span>{comment.content}</span>
            </li>
          );
        })}
      </>
    );
  }
}

export default Comment;
