import React, { Component } from 'react';

import Comment from '../Comment/Comment';

import menu from '../../../../../images/saranglee/Main/menu.svg';
import heart from '../../../../../images/saranglee/Main/heart.svg';
import send from '../../../../../images/saranglee/Main/send.svg';
import bookmark from '../../../../../images/saranglee/Main/bookmark.svg';
import comment from '../../../../../images/saranglee/Main/comment.svg';

import './Feed.scss';

class Feed extends Component {
  constructor() {
    super();
    this.state = {
      commentText: '',
      disableBtn: true,
      commentList: [],
      commentData: []
    }
  }

  componentDidMount() {
    fetch('/data_saranglee/commentData.json')
    .then(res => res.json())
    .then(res => {
      this.setState({
        commentData: res
      })
    })
  }

  writeComment = e => {
    const { commentText } = this.state;
    const { value } = e.target;

    this.setState({
      commentText: value,
      disableBtn: !commentText
    })
  }

  addComment = (e) => {
    if (e.key === "Enter") {
      this.submitComment();
    }
  }

  submitComment = () => {
    const { commentList, commentText } = this.state;

    this.setState({
      commentList: commentList.concat([commentText]),
      commentText: '',
      disableBtn: true
    })
  }

  render() {
    const { userImage, userLink, userId, userLocation, feedImage, likeUserLink, likeUserImage, likeUser, likeUserNum, feedText, time } = this.props;
    const { commentList, commentData, commentText, disableBtn } = this.state;
    const { writeComment, addComment, submitComment } = this;
    
    return (
      <article className="feed">
        <div className="feed_info">
          <div className="feed_link">
            <a href="https://www.instagram.com/wecode_bootcamp/">
              <img className="user_profile_img img_medium" alt="User Profile" src={userImage} />
            </a>
            <div className="feed_user_info">
                <a className="user_id" href={userLink}>
                  {userId}
                </a>
                <a className="user_location" href="https://www.instagram.com/explore/locations/213941548/seattle-washington/">
                  {userLocation}
                </a>
            </div>
          </div>
          <button className="more_icon btn">
            <img className="more_icon_img" alt="Menu icon" src={menu} />
          </button>
        </div>
        <img className="feed_img" alt="Feed" src={feedImage} />
        <div className="feed_function">
          <div className="feed_icons">
            <div className = "feed_icons_left">
              <button><img alt="Heart Icon" src={heart} /></button>
              <button><img alt="Comment Icon" src={comment} /></button>
              <button><img alt="Send Icon" src={send} /></button>
            </div>
            <button className="feed_icon_right">
              <img alt="Bookmark Icon" src={bookmark} />
            </button>
          </div>
          <div className="likes_num">
            <a href={likeUserLink}>
              <img className="user_profile_img img_small" alt="Profile" src={likeUserImage} />
            </a>
            <p>
              <a className="user_id" href={likeUserLink}>
                {likeUser}
              </a>님
              <button className="likes_users btn">
                {likeUserNum}
              </button>이 좋아합니다
            </p>
          </div>
          <div className="feed_content">
            <a className="user_id" href={userLink}>{userId}</a>
            <p>{feedText}</p>
            <button className="view_more btn">더 보기</button>
          </div>
          <div className="comment">
            {commentData.map(comment => {
              return(
                <div className="comment_written" key={comment.id}>
                  <span className="comment_content">
                    <a className="user_id" href={comment.userLink}>{comment.userId}</a>
                    <p className="comment_text">{comment.content}</p>
                  </span>
                  <img className="comment_like_btn" src={heart}/>
                </div>
              );
            })}
          </div>
          <Comment commentList={commentList} />
          <p className="time">{time}</p>
          <div className="comment_container">
            <input 
              className="comment_input"
              value={commentText}
              onChange={writeComment}
              onKeyPress={addComment}
              type="text"
              placeholder="댓글 달기..."
            />
            <button
              className="comment_submit btn"
              onClick={submitComment}
              disabled={disableBtn}
            >게시
            </button>
          </div>
        </div>
      </article> 
    );
  }
}

export default Feed;