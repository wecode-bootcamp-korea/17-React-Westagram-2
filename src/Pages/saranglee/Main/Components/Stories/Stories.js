import React, { Component } from 'react';
import './Stories.scss';

class Stories extends Component {
  constructor() {
    super();
    this.state = {
      storyData: []
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
  }

  render() {
    const { storyData } = this.state;
    return (
      <div className="stories">
        <div className="aside_title_container">
          <span className="aside_title">스토리</span>
          <a className="show_all" href="https://www.instagram.com/">모두 보기</a>
        </div>
        {storyData.map(story => {
          return (
            <div className="story" key={story.id}>
              <div className="img_user_info">
                <a className="aside_img" href={story.userLink}>
                  <div className="story_border" />
                  <img alt="Profile" className="user_profile_img img_medium" src={story.userImage} />
                </a>
                <div className="user_id_info">
                  <span className="user_id">{story.userId}</span>
                  <span className="aside_user_info">{story.time}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Stories;