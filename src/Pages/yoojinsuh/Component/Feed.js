import React, { Component } from "react";
import "../Component/Feed.scss";
import Comment from "./Comment";

class Feed extends Component {
  constructor() {
    super();
    this.state = {
      id: 20210131,
      comment: "",
      commentList: [],
      btnColor: true,
      heartFilled: false,
    };
  }

  commentValue = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };

  postKeyup = () => {
    if (this.state.comment) {
      this.setState({ btnColor: false });
    } else {
      this.setState({ btnColor: true });
    }
  };

  addComment = (e) => {
    if (this.state.comment) {
      this.setState({
        commentList: [
          ...this.state.commentList,
          {
            id: Date.now(),
            user: "hi_yoojins",
            comment: this.state.comment,
          },
        ],
        comment: "",
      });
      e.preventDefault();
    }
  };

  enterCommentList = (e) => {
    if (e.key === "Enter" && this.state.comment) {
      this.addComment();
    }
  };

  deleteComment = (e) => {
    const remainedComment = this.state.commentList.filter((item) => {
      return item.id !== Number(e.target.id);
    });

    this.setState({
      commentList: remainedComment,
    });
    e.preventDefault();
  };

  fillHeart = () => {
    this.setState({
      heartFilled: !this.state.heartFilled ? true : false,
    });
  };

  render() {
    const {
      profileImage,
      proAlt,
      mainAlt,
      userName,
      mainImage,
      content,
      likes,
    } = this.props;
    return (
      <div className="Feed">
        <article>
          <header>
            <div className="accountContainer">
              <img alt={proAlt} src={profileImage} />
              <h1> {userName} </h1>
            </div>
            <i className="fas fa-ellipsis-h" />
          </header>
          <img className="mainImage" alt={mainAlt} src={mainImage} />
          <footer>
            <div className="footerNav">
              <i
                className="far fa-heart"
                id={this.state.heartFilled ? "heartFilled" : "heartEmpty"}
                onClick={this.fillHeart}
              />
              <i className="far fa-comment" />
              <i className="far fa-paper-plane" />
            </div>
            <div className="footerSave">
              <i className="far fa-bookmark" id="bookmark" />
            </div>
          </footer>
          <p className="likes"> {likes} </p>
          <div className="contentContainer">
            <p className="accountName"> {userName} </p>
            <p className="contentDetail"> {content}</p>
          </div>
          <section className="comments">
            <div className="commentsLog">
              <ul className="commentsContainer">
                {this.state.commentList.map((comment) => {
                  return (
                    <Comment
                      key={comment.id}
                      id={comment.id}
                      comment={comment.comment}
                      deleteComment={this.deleteComment}
                    />
                  );
                })}
              </ul>
            </div>
            <form className="addComment" onKeyUp={this.postKeyup}>
              <input
                className="inputComment"
                type="text"
                placeholder="Add a comment"
                value={this.state.comment}
                onChange={this.commentValue}
              />
              <button
                className={!this.state.btnColor ? "darkBtn" : "inputSubmit"}
                onClick={this.addComment}
              >
                Post
              </button>
            </form>
          </section>
        </article>
      </div>
    );
  }
}

export default Feed;
