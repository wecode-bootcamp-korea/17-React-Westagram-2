import React, { Component } from 'react';
import './Story.scss';

class Story extends Component {
  render() {
    const { userImage, userLink, userId, time } = this.props;
    return (
      <div className="story">
        <div className="img_user_info">
          <a className="aside_img" href={userLink}>
            <div className="story_border" />
            <img alt="Profile" className="user_profile_img img_medium" src={userImage} />
          </a>
          <div className="user_id_info">
            <span className="user_id">{userId}</span>
            <span className="aside_user_info">{time}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Story;