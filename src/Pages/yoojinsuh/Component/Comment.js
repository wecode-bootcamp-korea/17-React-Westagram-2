import React, { Component } from "react";
import "./Comment.scss";

class Comment extends Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
      heart: false,
    };
  }

  render() {
    const { id, comment, deleteComment, fillHeart } = this.props;
    return (
      <li key={id}>
        <div>
          <span className="userAccount">hi_yoojins</span>
          <span> {comment}</span>
        </div>
        <div className="heartAndTrash">
          <i className="far fa-trash-alt" id={id} onClick={deleteComment}></i>
          <i className="far fa-heart"></i>
        </div>
      </li>
    );
  }
}

export default Comment;
