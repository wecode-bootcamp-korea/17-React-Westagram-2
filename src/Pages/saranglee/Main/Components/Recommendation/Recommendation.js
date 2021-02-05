import React, { Component } from 'react';
import './Recommendation.scss';

class Recommendation extends Component {
  constructor() {
    super();
    this.state = {
      recommendationData: []
    };
  }

  componentDidMount() {
    fetch('/data_saranglee/recommendationData.json')
    .then(res => res.json())
    .then(res => {
      this.setState({
        recommendationData: res
      })
    })
  }

  render() {
    const { recommendationData } = this.state;
    return (
      <div className="recommendation">
        <div className="aside_title_container">
          <span className="aside_title">회원님을 위한 추천</span>
          <a className="show_all" href="https://www.instagram.com/explore/people/suggested/">모두 보기</a>
        </div>
        {recommendationData.map( data => {
          return (
            <div className="recommendedAccount">
              <div className="img_user_info">
                <a className="aside_img" href={data.userLink}>
                  <img alt="Profile" className="user_profile_img img_medium" src={data.userImage} />
                </a>
                <div className="user_id_info">
                  <span className="user_id">{data.userId}</span>
                  <span className="aside_user_info">{data.follower}</span>
                </div>
              </div>
              <button className="follow btn">팔로우</button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Recommendation;