import React, { Component } from 'react';
import FeedComment from '../FeedComment/FeedComment';

class FeedConent extends Component {

    state = {
        mainId: 'Purple_World',
        mainImage: 'https://images.unsplash.com/photo-1546930722-a1292ed9dee8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=696&q=80',
        mainContent: ': Hello, Purful World',
        feedData: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/data_mihyeon/feedData.json', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    feedData: data
                })
            })
    }

    render() {
        const { mainId, mainContent, mainImage, feedData } = this.state;

        return (
            <div className="feed_container">
                {feedData.map(data => {
                    return (
                        <article key={data.id} className="feed_contents">
                            <div className="feed_header">
                                <img className="round_image"
                                    src={mainImage}
                                    alt="profile" />
                                <div>
                                    <p>{mainId}</p>
                                    <p>{mainContent}</p>
                                </div>
                                <i className="fas fa-ellipsis-h settings_icon"></i>
                            </div>
                            <div className="main_image_container">
                                <img className="main-image"
                                    src={data.image}
                                    alt="purple" />
                            </div>
                            <div className="board_container">
                                <div className="icons_contianer">
                                    <i className="fas fa-heart"></i>
                                    <i className="far fa-comment"></i>
                                    <i className="fas fa-external-link-alt"></i>
                                    <i className="far fa-bookmark"></i>
                                </div>
                                <div className="feed_icons_container">
                                    <img className="round_image_small"
                                        src={mainImage}
                                        alt="profile" />
                                    <span>Purple님 외 4명이 좋아합니다.</span>
                                </div>
                                <div className="feed_message_container">
                                    <span className="feed_main_id">{mainId}</span>
                                    <span className="feed_message"> {data.content}</span>
                                </div>
                                <FeedComment />
                            </div>
                        </article>
                    )
                })}

            </div>
        );
    }
}

export default FeedConent;