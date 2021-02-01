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
      commentList: []
    }
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
    return (
      <article className="feed">
              <div className="feed-info">
                <div className="feed-link">
                  <a href="https://www.instagram.com/wecode_bootcamp/">
                    <img className="user-profile-img img-medium" alt="User Profile" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/55847260_327918481255327_5311724473169215488_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=RPhPMsYaoDQAX9134e0&tp=1&oh=88f7d25b48019ebda01d129e4e624bf3&oe=60391BD9" />
                  </a>
                  <div className="feed-user-info">
                      <a className="user-id" href="https://www.instagram.com/tyler_spangler/">tired.dum</a>
                      <a className="user-location" href="https://www.instagram.com/explore/locations/213941548/seattle-washington/">Seattle, Washington</a>
                  </div>
                </div>
                <button className="more-icon btn">
                  <img className="more-icon-img" alt="Menu icon" src={ menu } />
                </button>
              </div>
              <img className="feed-img" alt="Feed" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/125190533_283398749688957_4796822018880485278_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=hbL9TBqMwYIAX_qKHSc&tp=1&oh=0a0fb38780ccc11ae88c6008f031e5ec&oe=603BA339" />
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
                  <a href="https://www.instagram.com/illustration_festa/">
                    <img className="user-profile-img img-small" alt="Profile" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/74359821_545447859628744_8418376912249815040_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=Kx4-_JVEGKYAX9rwBnF&tp=1&oh=14b864c11d0f16a131b850ceecb453a1&oe=6034FC22" />
                  </a>
                  <p><a className="user-id" href="https://www.instagram.com/illustration_festa/">illustration_festa</a>님<button className="likes-users btn">외 1033명</button>이 좋아합니다</p>
                </div>
                <div className="feed-content">
                  <a className="user-id" href="https://www.instagram.com/tyler_spangler/">tyler_spangler</a>
                  <p>20% off my store today 🌈 link ...</p>
                  <button className="view-more btn">더 보기</button>
                </div>
                <div className="comment-container">
                  <div className="comment-written">
                    <a className="user-id" href="https://www.instagram.com/sadfrogmeme/">pepe_sad</a>
                    <p className="comment-text">페페는 슬프다...</p>
                  </div>
                  <Comment commentList={this.state.commentList} />
                </div>
                <p className="time">4시간 전</p>
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