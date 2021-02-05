import React, { Component } from "react";
import Comments from "./Comments/Comments";

class Feed extends Component {
  render() {
    return (
      <div>
        {this.props.feedDatas.map((feed) => {
          return (
            <article className="main-feed" id={feed.id} key={feed.id}>
              <header>
                <a href="#" className="feed-profile">
                  <img src={feed.pofile_img_src} alt="profile image" />
                </a>
                <div className="feed-info">
                  <a href="#">{feed.username}</a>
                  <a href="#">{feed.location}</a>
                </div>
                <a href="#">
                  <i className="fas fa-ellipsis-h" />
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
                    <i className="far fa-heart" />
                    <i className="far fa-comment" />
                    <i className="far fa-paper-plane" />
                  </div>
                  <i className="far fa-bookmark" />
                </div>
                <span className="feed-likes">좋아요 {feed.likes}개</span>
              </div>

              <Comments uploadTime={feed.time} />
            </article>
          );
        })}
      </div>
    );
  }
}

export default Feed;
