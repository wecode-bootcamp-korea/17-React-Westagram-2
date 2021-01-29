import React, { Component } from 'react';

class MainFeed extends Component {
    state = {
        comment: '',
        commentList: []
    }
    handleWriteComment = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    handleUpdateComment = (e) => {
        this.setState({
            commentList: this.state.commentList.concat(this.state.comment),
            comment: ''
        })
        console.log(this.state.comment);

    }

    render() {
        const { commentList } = this.state;
        const commentLiElement = commentList.map((comment, index) => <li key={index}> {comment}</li>)

        return (
            <main className="main_container">
                <div className="feed_container">
                    <article className="feed_contents">
                        <div className="feed_header">
                            <img className="round_image"
                                src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s320x320/125347387_665294197692336_6026840706998274426_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=tTXjt-AKBPgAX_lD9lM&tp=1&oh=1400139d1b105c2d08f0a1bd8289d634&oe=602BF316"
                                alt="profile" />
                            <div>
                                <p>Sia_fanpage</p>
                                <p>Sia, fanpage, Korea</p>
                            </div>
                            <i className="fas fa-ellipsis-h settings_icon"></i>
                        </div>
                        <div className="main_image_container">
                            <img className="main-image"
                                src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/59163523_155227472178890_919977553715347152_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=qQ3sW1xFc_kAX8Cyuyw&tp=1&oh=0f3eeb75a6b8f3eda3a9019bd5aa839e&oe=603189AF"
                                alt="sia" />
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
                                    src="https://scontent-ssn1-1.cdninstagram.com/v/t51.2885-15/e35/s320x320/125347387_665294197692336_6026840706998274426_n.jpg?_nc_ht=scontent-ssn1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=tTXjt-AKBPgAX_lD9lM&tp=1&oh=1400139d1b105c2d08f0a1bd8289d634&oe=602BF316"
                                    alt="profile" />
                                <span>Sia님 외 4명이 좋아합니다.</span>
                            </div>
                            <div className="feed_message_container">
                                <span className="feed_main_id">Sia_fanpage</span>
                                <span className="feed_message"> hoho!</span>
                            </div>
                            <div className="comment_conatainer">
                                <ul>{commentLiElement}</ul>
                                <div className="comment_line"></div>
                                <form className="comment_write_form" >
                                    <textarea aria-label="댓글 달기 " className="comment_input" name="comment" placeholder="댓글달기..." onChange={this.handleWriteComment} value={this.state.comment}></textarea>
                                    <button className="comment_submit_button" type="button" onClick={this.handleUpdateComment}>게시</button>
                                </form>
                            </div>
                        </div>
                    </article>
                </div>
                <aside className="right_whole_container">
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
            </main>
        );
    }
}

export default MainFeed;