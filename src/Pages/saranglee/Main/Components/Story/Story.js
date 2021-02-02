import React, { Component } from 'react';

import './Story.scss';

class Story extends Component {
  render() {
    return (
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
    );
  }
}

export default Story;