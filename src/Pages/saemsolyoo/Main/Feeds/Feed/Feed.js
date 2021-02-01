import React, { Component } from "react";

class Feed extends Component {
  render() {
    return (
      <div>
        {this.props.feedDatas.map((feed) => {
          return (
            <article className="main-feed" id={feed.id}>
              <header>
                <a href="#" className="feed-profile">
                  <img src={feed.pofile_img_src} alt="profile image" />
                </a>
                <div className="feed-info">
                  <a href="#">{feed.username}</a>
                  <a href="#">{feed.location}</a>
                </div>
                <a href="#">
                  <i className="fas fa-ellipsis-h"></i>
                </a>
              </header>
              <img
                className="feed-image"
                src={feed.feed_img_src}
                alt="feed image"
              />
              <div className="feed-comment">
                <div className="feed-icons">
                  <div className="feed-icons-left">
                    <i className="far fa-heart"></i>
                    <i className="far fa-comment"></i>
                    <i className="far fa-paper-plane"></i>
                  </div>
                  <i className="far fa-bookmark"></i>
                </div>
                <span className="feed-likes">좋아요 {feed.likes}개</span>
                <ul className="feed-comment-list">
                  {feed.comments.map((comment) => {
                    return (
                      <li>
                        <a href="#">{comment.id}</a>
                        <span>{comment.comment}</span>
                      </li>
                    );
                  })}
                </ul>
                <span className="feed-uploaded-time">{feed.time}</span>
              </div>

              <form action="" className="feed-comment-form">
                <input
                  type="text"
                  className="feed-comment-input"
                  placeholder="댓글 달기..."
                />
                <button className="feed-comment-submit" type="submit" disabled>
                  게시
                </button>
              </form>
            </article>
          );
        })}
      </div>
    );
  }
}

export default Feed;
