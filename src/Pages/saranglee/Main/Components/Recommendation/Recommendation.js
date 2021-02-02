import React, { Component } from 'react';

import './Recommendation.scss';

class Recommendation extends Component {
  render() {
    return (
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
    );
  }
}

export default Recommendation;