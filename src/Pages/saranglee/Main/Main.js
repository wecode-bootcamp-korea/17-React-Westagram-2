import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import '../../../Styles/reset.scss';
import '../../../Styles/common.scss';
import './Main.scss';

import westagramLogo from '../../../images/saranglee/Main/westagramLogo.svg';
import instagram from '../../../images/saranglee/Main/instagram.svg';
import menu from '../../../images/saranglee/Main/menu.svg';
import heart from '../../../images/saranglee/Main/heart.svg';
import send from '../../../images/saranglee/Main/send.svg';
import bookmark from '../../../images/saranglee/Main/bookmark.svg';
import comment from '../../../images/saranglee/Main/comment.svg';
import search from '../../../images/saranglee/Main/search.svg';

class MainSarang extends Component {
  render() {
    return (
      <div className="MainSarang">
        <nav>
          <div className="nav-container">
            <div className="logo-container">
              <img className="instagram-icon" alt="Instagram Icon" src={ instagram } />
              <div className="line"></div>
              <img className="logo-img" alt="Westagram Logo" src={ westagramLogo } />
            </div>
            <div className="search-bar">
              <input className="search" type="search" />
              <div className="search-placeholder">
                <img className="search-icon" alt="Search Icon" src={ search } />
                <span>검색</span>
              </div>
            </div>
            <div className="nav-icons">
              <a href="https://www.instagram.com/explore/">
                <img className="explore-icon" alt="Explore Icon" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" />
                </a>
              <a href="https://www.instagram.com/accounts/activity/">
                <img className="heart-icon" alt="Heart Icon" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
                </a>
              <img className="profile-icon" alt="Profile Icon" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" />
            </div>
          </div>
        </nav>
        <main>
          <div className="feeds">
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
                </div>
                  <p className="time">4시간 전</p>
                <div className="comment">
                  <input className="comment-input" type="text" placeholder="댓글 달기..." />
                  <button className="comment-submit btn" disabled>게시</button>
                </div>
              </div>
            </article>
            <article className="feed">
              <div className="feed-info">
                <div className="feed-link">
                  <a href="https://www.instagram.com/wecode_bootcamp/">
                    <img className="user-profile-img img-medium" alt="User Profile" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/25010456_240967689773593_8637239890079121408_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=21NEzR2y5l4AX9juxPD&tp=1&oh=0a821129278f40c37bbb68647f380793&oe=603891FD" />
                  </a>
                  <div className="feed-user-info">
                      <a className="user-id" href="https://www.instagram.com/tyler_spangler/">tyler_spangler</a>
                      <a className="user-location" href="https://www.instagram.com/explore/locations/213941548/seattle-washington/">Seattle, Washington</a>
                  </div>
                </div>
                <button className="more-icon btn"><img className="more-icon-img" alt="Menu Icon" src={ menu } /></button>
              </div>
              <img className="feed-img" alt="Feed" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/141447054_448034496373554_8172711273219597864_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=djTWyntF1xkAX-VGJlf&tp=1&oh=0112caccc1bb33828b9a174ff93b6a8c&oe=60399574" />
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
                </div>
                <p className="time">4시간 전</p>
                <div className="comment">
                  <input className="comment-input" type="text" placeholder="댓글 달기..." />
                  <button className="comment-submit btn" disabled>게시</button>
                </div>
              </div>
            </article>
          </div>
          <div className="wrap-main-right">
            <aside className="main-right">
              <div className="my-profile">
                <a href="https://www.instagram.com/wecode_bootcamp/">
                  <img alt="Profile" className="user-profile-img img-large" src="https://64.media.tumblr.com/515c3489a8ffb744464e32a0dd35b7c9/tumblr_nsgln1egNd1ucxsygo1_400.jpg" />
                </a>
                <a className="user-id" href="https://www.instagram.com/wecode_bootcamp/">pepe_sad</a>
              </div>
              <div className="stories">
                <div className="aside-title-container">
                  <span className="aside-title">스토리</span>
                  <a className="show-all" href="https://www.instagram.com/">모두 보기</a>
                </div>
                <div className="story">
                  <div className="img-user-info">
                    <a className="aside-img" href="https://www.instagram.com/tototatatu/">
                      <div className="story-border"></div>
                      <img alt="Profile" className="user-profile-img img-medium" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/84007555_559276731351007_7082859236740300800_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=aiJRUAivE74AX-ehbwD&tp=1&oh=cccbc1bb306c2a1f377f70dba13c2dec&oe=60379EC2" />
                    </a>
                    <div className="user-id-info">
                      <span className="user-id">tototatatu</span>
                      <span className="aside-user-info">16분 전</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="recommendation">
                <div className="aside-title-container">
                  <span className="aside-title">회원님을 위한 추천</span>
                  <a className="show-all" href="https://www.instagram.com/explore/people/suggested/">모두 보기</a>
                </div>
                <div className="recommended-account">
                  <div className="img-user-info">
                    <a className="aside-img" href="https://www.instagram.com/onearthmagazine/">
                      <img alt="Profile" className="user-profile-img img-medium" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/45800260_2095307027159510_8434008982594519040_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=MKsMjBc7NOcAX-e6MmW&tp=1&oh=385bb59b283c83b21fa182c7c77f7626&oe=6036B7D4" />
                    </a>
                    <div className="user-id-info">
                      <span className="user-id">onearthmagazine</span>
                      <span className="aside-user-info">dribble님이 팔로우합니다</span>
                    </div>
                  </div>
                  <button className="follow btn">팔로우</button>
                </div>
              </div>
              <footer>
                <a href="https://about.instagram.com/">소개</a><span> • </span>
                <a href="https://help.instagram.com/">도움말</a><span> • </span>
                <a href="https://about.instagram.com/blog">홍보 센터</a><span> • </span>
                <a href="https://www.instagram.com/developer/">API</a><span> • </span>
                <a href="https://about.instagram.com/about-us/careers">채용 정보</a><span> • </span>
                <a href="https://help.instagram.com/519522125107875">개인정보처리방침</a><span> • </span>
                <a href="https://help.instagram.com/581066165581870">약관</a><span> • </span>
                <a href="https://www.instagram.com/explore/locations/">위치</a><span> • </span>
                <a href="https://www.instagram.com/directory/profiles/">인기계정</a><span> • </span>
                <a href="https://www.instagram.com/directory/hashtags/">해시태그</a><span> • </span>
                <button className="language">언어</button>
                <p className="copyright">© 2021 INSTAGRAM FROM FACEBOOK</p>
              </footer>
            </aside>
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(MainSarang);