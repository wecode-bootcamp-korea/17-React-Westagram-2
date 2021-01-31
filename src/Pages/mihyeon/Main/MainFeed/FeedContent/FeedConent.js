import React, { Component } from 'react';
import FeedComment from '../FeedComment/FeedComment';

class FeedConent extends Component {
    state = {
        mainId: 'Purple_World',
        mainImage: 'https://images.unsplash.com/photo-1546930722-a1292ed9dee8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=696&q=80',
        mainContent: ': Hello, Purful World',
        feedData: [
            {
                id: 1,
                image: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1387&q=80',
                content: 'Colorful, Powerful, Purple',
                comment: ''
            },
            {
                id: 2,
                image: 'https://images.unsplash.com/photo-1573614999645-e5f0f16ec15d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                content: 'Colorful, Powerful, Purple',
                comment: ''
            },
            {
                id: 3,
                image: 'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.134.1080.1080a/s640x640/143362019_3566322480145420_2387980481538023927_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=uyreQw2oB4EAX-4TZqr&tp=1&oh=4560f4461b46d161e26057f63f3d9bba&oe=603CB45A',
                content: 'Colorful, Powerful, Purple',
                comment: ''
            },
            {
                id: 4,
                image: 'https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.115.1080.1080a/s640x640/140357809_407449440516515_3101169429039269123_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=RVkYfqXInjkAX9Og3Iw&tp=1&oh=c51d0be1fd8762c7e01ab6506e17100b&oe=603E1D5F',
                content: 'Colorful, Powerful, Purple',
                comment: ''
            },
            {
                id: 5,
                image: 'https://images.unsplash.com/photo-1564933983533-2c8152d3d00e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                content: 'Colorful, Powerful, Purple',
                comment: ''
            }
        ]
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