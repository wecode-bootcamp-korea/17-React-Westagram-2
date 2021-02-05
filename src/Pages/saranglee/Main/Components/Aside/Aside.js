import React, { Component } from 'react';
import Story from '../Story/Story';
import Recommendation from '../Recommendation/Recommendation';
import Footer from '../Footer/Footer'
import './Aside.scss'

class Aside extends Component {
  constructor() {
    super();
    this.state = {
      storyData: [],
      recommendationData: []
    };
  }

  componentDidMount() {
    fetch('/data_saranglee/storyData.json')
    .then(res => res.json())
    .then(res => {
      this.setState({
        storyData: res
      })
    })
    fetch('/data_saranglee/recommendationData.json')
    .then(res => res.json())
    .then(res => {
      this.setState({
        recommendationData: res
      })
    })
  }
  render() {
    const { storyData, recommendationData } = this.state;
    return (
      <aside className="aside">
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
          {storyData.map(story => 
            <Story
              key={story.id}
              userImage={story.userImage}
              userLink={story.userLink}
              userId={story.userId}
              time={story.time}
            />
          )}
        </div>
        <div className="recommendation">
          <div className="aside_title_container">
            <span className="aside_title">회원님을 위한 추천</span>
            <a className="show_all" href="https://www.instagram.com/explore/people/suggested/">모두 보기</a>
          </div>
          {recommendationData.map(recommendation => 
            <Recommendation
              key={recommendation.id}
              userImage={recommendation.userImage}
              userLink={recommendation.userLink}
              userId={recommendation.userId}
              follower={recommendation.follower}
            />
          )}
        </div>
        <Footer />
      </aside>
    );
  }
}

export default Aside;