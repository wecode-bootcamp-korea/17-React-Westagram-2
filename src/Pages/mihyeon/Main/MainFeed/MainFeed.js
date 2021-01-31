import React, { Component } from 'react';
import Recommendation from '../Recommendation/Recommendation';
import FeedConent from './FeedContent/FeedConent';

class MainFeed extends Component {

    render() {
        return (
            <main className="main_container">
                <FeedConent />
                <Recommendation />
            </main>
        );
    }
}

export default MainFeed;