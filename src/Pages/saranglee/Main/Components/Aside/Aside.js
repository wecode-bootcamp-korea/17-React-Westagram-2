import React, { Component } from 'react';
import Stories from '../Stories/Stories';
import Recommendation from '../Recommendation/Recommendation';
import Footer from '../Footer/Footer'
import './Aside.scss'

class Aside extends Component {
  render() {
    return (
      <aside className="aside">
        <div className="my_profile">
          <a href="https://www.instagram.com/wecode_bootcamp/">
            <img alt="Profile" className="user_profile_img img_large" src="https://64.media.tumblr.com/515c3489a8ffb744464e32a0dd35b7c9/tumblr_nsgln1egNd1ucxsygo1_400.jpg" />
          </a>
          <a className="user_id" href="https://www.instagram.com/wecode_bootcamp/">pepe_sad</a>
        </div>
        <Stories />
        <Recommendation />
        <Footer />
      </aside>
    );
  }
}

export default Aside;