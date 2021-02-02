import React, { Component } from "react";
import "./Comment.scss";

class Comment extends Component {
  render() {
    return (
      <div className="Comment">
        {this.props.commentList.map((comment) => {
          return (
            <li key={comment.id}>
              <div>
                <a href="#">{comment.userName}</a>
                <span>{comment.content}</span>
              </div>
              <div>
                <i
                  id={comment.id}
                  className="fas fa-trash"
                  onClick={this.props.deleteComment}
                ></i>
                <i
                  className={comment.isLiked ? "hidden" : "far fa-heart unlike"}
                ></i>
                <i
                  className={comment.isLiked ? "fas fa-heart like" : "hidden"}
                ></i>
              </div>
            </li>
          );
        })}
      </div>
    );
  }
}

export default Comment;
