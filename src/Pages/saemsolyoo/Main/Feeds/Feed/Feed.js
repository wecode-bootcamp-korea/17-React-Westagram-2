import React, { Component } from "react";
import Comments from "./Comments/Comments";

class Feed extends Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       commentList: [],
  //       commentValue: "",
  //     };
  //   }

  //   componentDidMount() {
  //     fetch("http://localhost:3000/data_saemsolyoo/commentData.json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log();
  //         this.setState({
  //           commentList: data,
  //         });
  //       });
  //   }

  render() {
    // console.log(this.state.commentList["feed01"]);
    // console.log(this.state.commentList["feed02"]);
    return (
      <div>
        {this.props.feedDatas.map((feed) => {
          //   const currentComment = this.state.commentList[feed.id];

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
              </div>
              {/* <Comments commentLists={this.state.commentList[feed.id]} /> */}
              <Comments uploadTime={feed.time} />
              {/* <ul className="feed-comment-list">
                  {feed.comments.map((comment) => {
                    return (
                      <li>
                        <a href="#">{comment.id}</a>
                        <span>{comment.comment}</span>
                      </li>
                    );
                  })}
                </ul> */}
            </article>
          );
        })}
      </div>
    );
  }
}

export default Feed;
