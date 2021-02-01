import React, { Component } from 'react';
import Recommendation from '../Recommendation/Recommendation';
import FeedConent from './FeedContent/FeedConent';

class MainFeed extends Component {
    state = {
        mainData: []
    }
    componentDidMount() {
        fetch('http://localhost:3000/data_mihyeon/mainData.json', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    mainData: data
                })
            })
    }

    render() {
        const { mainData } = this.state;
        return (
            <main className="main_container">
                <FeedConent mainData={mainData} />
                <Recommendation mainData={mainData} />
            </main>
        );
    }
}

export default MainFeed;