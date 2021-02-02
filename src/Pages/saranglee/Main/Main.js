import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Nav from './Components/Nav/Nav'
import Feed from './Components/Feed/Feed'

import '../../../Styles/reset.scss';
import '../../../Styles/common.scss';
import '../common.scss';
import './Main.scss';

class MainSarang extends Component {
  constructor() {
    super();
    this.state = {
      feedData: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data_saranglee/feedData.json', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(res => {
      this.setState({
        feedData: res
      })
    })
  }

  render() {
    const { feedData } = this.state;
    return (
      <div className="main">
        <Nav />
        <main>
          <div className="feeds">
            {feedData.map(feed => {
              return <Feed data={feed} />;
            })} 
          </div>
          <div className="wrap_main_right">
            <aside className="main_right">
              <div className="my_profile">
                <a href="https://www.instagram.com/wecode_bootcamp/">
                  <img alt="Profile" className="user_profile_img img_large" src="https://64.media.tumblr.com/515c3489a8ffb744464e32a0dd35b7c9/tumblr_nsgln1egNd1ucxsygo1_400.jpg" />
                </a>
                <a className="user_id" href="https://www.instagram.com/wecode_bootcamp/">pepe_sad</a>
              </div>
              <div className="stories">
                <div className="aside_title_container">
                  <span className="aside_title">스토리</span>
                  <a className="show_all" href="https://www.instagram.com/">모두 보기</a>
                </div>
                <div className="story">
                  <div className="img_user_info">
                    <a className="aside_img" href="https://www.instagram.com/tototatatu/">
                      <div className="story_border"></div>
                      <img alt="Profile" className="user_profile_img img_medium" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/84007555_559276731351007_7082859236740300800_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=aiJRUAivE74AX-ehbwD&tp=1&oh=cccbc1bb306c2a1f377f70dba13c2dec&oe=60379EC2" />
                    </a>
                    <div className="user_id_info">
                      <span className="user_id">tototatatu</span>
                      <span className="aside_user_info">16분 전</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="recommendation">
                <div className="aside_title_container">
                  <span className="aside_title">회원님을 위한 추천</span>
                  <a className="show_all" href="https://www.instagram.com/explore/people/suggested/">모두 보기</a>
                </div>
                <div className="recommended_account">
                  <div className="img_user_info">
                    <a className="aside_img" href="https://www.instagram.com/onearthmagazine/">
                      <img alt="Profile" className="user_profile_img img_medium" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/45800260_2095307027159510_8434008982594519040_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=MKsMjBc7NOcAX-e6MmW&tp=1&oh=385bb59b283c83b21fa182c7c77f7626&oe=6036B7D4" />
                    </a>
                    <div className="user_id_info">
                      <span className="user_id">onearthmagazine</span>
                      <span className="aside_user_info">dribble님이 팔로우합니다</span>
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