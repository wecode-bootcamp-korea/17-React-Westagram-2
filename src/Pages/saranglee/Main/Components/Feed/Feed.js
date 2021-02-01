import React, { Component } from 'react';
import Comment from '../Comment/Comment'

import './Feed.scss'

import menu from '../../../../../images/saranglee/Main/menu.svg';
import heart from '../../../../../images/saranglee/Main/heart.svg';
import send from '../../../../../images/saranglee/Main/send.svg';
import bookmark from '../../../../../images/saranglee/Main/bookmark.svg';
import comment from '../../../../../images/saranglee/Main/comment.svg';

class Feed extends Component {
  constructor() {
    super();
    this.state = {
      commentText: '',
      btnOpacity: 0.3,
      disableBtn: true,
      commentList: [],
      commentData: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/data_saranglee/commentData.json', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        commentData: res
      })
    })
  }

  writeComment = (e) => {
    this.setState({
      commentText: e.target.value,
      btnOpacity: 1,
      disableBtn: false
    })

    if (!this.state.commentText) {
      this.setState({
        btnOpacity: 0.3,
        disableBtn: true
      })
    }
  }

  addComment = (e) => {
    if (e.key === "Enter") {
      this.submitComment();
    }
  }

  submitComment = () => {
    this.setState({
      commentList: this.state.commentList.concat([this.state.commentText]),
      commentText: '',
      btnOpacity: 0.3,
      disableBtn: true
    })
  }

  render() {
    const { data } = this.props;
    const { commentList, commentData } = this.state;
    return (
      <article className="feed">
              <div className="feed-info">
                <div className="feed-link">
                  <a href="https://www.instagram.com/wecode_bootcamp/">
                    <img className="user-profile-img img-medium" alt="User Profile" src={data.userImage} />
                  </a>
                  <div className="feed-user-info">
                      <a className="user-id" href={data.userLink}>{data.userId}</a>
                      <a className="user-location" href="https://www.instagram.com/explore/locations/213941548/seattle-washington/">{data.userLocation}</a>
                  </div>
                </div>
                <button className="more-icon btn">
                  <img className="more-icon-img" alt="Menu icon" src={ menu } />
                </button>
              </div>
              <img className="feed-img" alt="Feed" src={data.feedImage} />
              <div className="feed-function">
                <div className="feed-icons">
                  <div className = "feed-icons-left">
                    <button><img alt="Heart Icon" src={ heart } /></button>
                    <button><img alt="Comment Icon" src={ comment } /></button>
                    <button><img alt="Send Icon" src={ send } /></button>
                  </div>
                  <button className="feed-icon-right">
                    <img alt="Bookmark Icon" src={ bookmark } />
                  </button>
                </div>
                <div className="likes-num">
                  <a href={data.likeUserLink}>
                    <img className="user-profile-img img-small" alt="Profile" src={data.likeUserImage} />
                  </a>
                  <p><a className="user-id" href={data.likeUserLink}>{data.likeUser}</a>님<button className="likes-users btn">{data.likeUserNum}</button>이 좋아합니다</p>
                </div>
                <div className="feed-content">
                  <a className="user-id" href={data.userLink}>{data.userId}</a>
                  <p>{data.feedText}</p>
                  <button className="view-more btn">더 보기</button>
                </div>
                <div className="comment-container">
                  {commentData.map(comment => {
                    return(
                      <div className="comment-written">
                        <a className="user-id" href={comment.userLink}>{comment.userId}</a>
                        <p className="comment-text">{comment.content}</p>
                      </div>
                    );
                  })}
                  <Comment commentList={commentList} />
                </div>
                <p className="time">{data.time}</p>
                <div className="comment">
                  <input 
                    className="comment-input"
                    value={this.state.commentText}
                    onChange={this.writeComment}
                    onKeyPress={this.addComment}
                    type="text"
                    placeholder="댓글 달기..."
                  />
                  <button
                    className="comment-submit btn"
                    onClick={this.submitComment}
                    style={{ opacity: this.state.btnOpacity}}
                    disabled={this.state.disableBtn}
                  >게시
                  </button>
                </div>
              </div>
            </article>
          
    );
  }
}

export default Feed;