import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Nav from './Components/Nav/Nav';
import Feed from './Components/Feed/Feed';
import Story from './Components/Story/Story';
import Recommendation from './Components/Recommendation/Recommendation';

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
                <Story />
              </div>
              <div className="recommendation">
                <div className="aside_title_container">
                  <span className="aside_title">회원님을 위한 추천</span>
                  <a className="show_all" href="https://www.instagram.com/explore/people/suggested/">모두 보기</a>
                </div>
                <Recommendation />
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