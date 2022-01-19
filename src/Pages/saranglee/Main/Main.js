import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Feed from './Components/Feed/Feed';
import Aside from './Components/Aside/Aside';
import '../common.scss';
import './Main.scss';

class MainSarang extends Component {
  constructor() {
    super();
    this.state = {
      feedData: []
    };
  }

  componentDidMount() {
    fetch('/data_saranglee/feedData.json')
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
          <section className="feeds">
            {feedData.map((feed) => 
              <Feed
                key={feed.id}
                userImage={feed.userImage}
                uerLink={feed.uerLink}
                userId={feed.userId}
                userLocation={feed.userLocation}
                feedImage={feed.feedImage}
                likeUserLink={feed.likeUserLink}
                likeUserImage={feed.likeUserImage}
                likeUser={feed.likeUser}
                likeUserNum={feed.likeUserNum}
                feedText={feed.feedText}
                time={feed.time}
              />
            )}
          </section>
          <div className="wrap_main_right">
            <Aside />
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(MainSarang);