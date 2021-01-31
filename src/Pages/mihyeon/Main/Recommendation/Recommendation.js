import React, { Component } from 'react';
import './Recommendation.scss';

class Recommendation extends Component {
    render() {
        return (
            <aside className="recommendation">
                <div className="main_right_container">
                    <div className="recomandation_profile">
                        <img className="round_image"
                            src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s320x320/125347387_665294197692336_6026840706998274426_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=tTXjt-AKBPgAX_lD9lM&tp=1&oh=1400139d1b105c2d08f0a1bd8289d634&oe=602BF316"
                            alt="profile" />
                        <div className="own_profile_container">
                            <p>Sia_fanpage</p>
                            <p>Sia, fanpage, Korea</p>
                        </div>
                        <div>전환</div>
                    </div>
                    <div className="recomandation_list">
                        <div>
                            <p>회원님을 위한 추천</p>
                            <p>모두 보기</p>
                        </div>
                        <div className="recomandation_individual">
                            <img className="round_image" src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/c157.0.405.405a/s320x320/137098773_710842363150812_7843511372978027429_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=DFlqa4zw7e4AX9wezXR&tp=1&oh=2bca11045c2e951d70138ca03d4ed95b&oe=6014AB36" alt="recomandation" />
                            <div>
                                <span className="user_id">hohohosia</span>
                                <span className="user_follow_status">hohohosia</span>
                            </div>
                            <div>팔로우</div>
                        </div>
                    </div>
                </div>
            </aside>
        );
    }
}

export default Recommendation;