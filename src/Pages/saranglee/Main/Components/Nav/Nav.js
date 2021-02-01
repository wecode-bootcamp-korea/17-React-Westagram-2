import React, { Component } from 'react';

import './Nav.scss';

import westagramLogo from  '../../../../../images/saranglee/Main/westagramLogo.svg';
import instagram from '../../../../../images/saranglee/Main/instagram.svg';
import search from '../../../../../images/saranglee/Main/search.svg';

class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
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
    );
  }
}

export default Nav;