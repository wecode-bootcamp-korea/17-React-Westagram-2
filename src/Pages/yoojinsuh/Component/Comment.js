import React, { Component } from "react";
import "./Comment.scss";

class Comment extends Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
      heartFilled: false,
    };
  }

  fillHeart = () => {
    this.setState({
      heartFilled: !this.state.heartFilled ? true : false,
    });
  };

  render() {
    const { id, comment, deleteComment } = this.props;
    return (
      <li className="Comment" key={id}>
        <div>
          <span className="userAccount">hi_yoojins</span>
          <span> {comment}</span>
        </div>
        <div className="heartAndTrash">
          <i className="far fa-trash-alt" id={id} onClick={deleteComment} />
          <i
            className="far fa-heart"
            id={this.state.heartFilled ? "heartFilled" : "heartEmpty"}
            onClick={this.fillHeart}
          />
        </div>
      </li>
    );
  }
}

export default Comment;
