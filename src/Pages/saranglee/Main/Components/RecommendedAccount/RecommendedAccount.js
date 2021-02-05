import React, { Component } from 'react';
import './RecommendedAccount.scss';

class RecommendedAccount extends Component {
  render() {
    const { userLink, userImage, userId, follower } = this.props;
    return (
      <div className="recommendedAccount">
        <div className="img_user_info">
          <a className="aside_img" href={userLink}>
            <img alt="Profile" className="user_profile_img img_medium" src={userImage} />
          </a>
          <div className="user_id_info">
            <span className="user_id">{userId}</span>
            <span className="aside_user_info">{follower}</span>
          </div>
        </div>
        <button className="follow btn">팔로우</button>
      </div>
    );
  }
}

export default RecommendedAccount;