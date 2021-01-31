import React, { Component } from "react";
import "./CommentComp.scss";

class CommentComp extends Component {
  render() {
    const { index, user, comment, key } = this.props;
    console.log(this.props);
    return (
      <div className="CommentComp">
        <li>
          <div>
            <span className="userAccount" id={index}>
              {user}
            </span>
            <span>{comment}</span>
          </div>
          <div className="heartAndTrash">
            <i className="far fa-trash-alt"></i>
            <i className="far fa-heart" id="commentHeart"></i>
          </div>
        </li>
      </div>
    );
  }
}

export default CommentComp;
