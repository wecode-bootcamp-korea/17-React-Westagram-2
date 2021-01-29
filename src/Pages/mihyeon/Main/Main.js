import React, { Component } from "react";
import MainFeed from "./Feed/MainFeed";
import "./Main.scss";


class Main extends React.Component {
    state = {
        comment: '',
        commentList: []
    }

    handleWriteComment = (e) => {
        this.setState({
            comment: e.target.value
        })
    }
    handleUpdateComment = (e) => {
        this.setState({
            commentList: this.state.commentList.concat(this.state.comment)
        })
        console.log(this.state.commentList);
    }


    render() {
        const { comment, commentList } = this.props;

        return (
            <div className="westargram_whole_container">
                <nav className="navigation_bar_container">
                    <div className="navigation_bar_column title_nav">
                        <div>Westagram</div>
                    </div>

                    <div className="navigation_bar_column input_search_container">
                        <input type="text" className="input_search_bar" defaultValue="" placeholder="검색" />
                        <i className="fas fa-search"></i>
                        <div className="searched_id_container">
                            <div className="searched_id_list">
                            </div>
                        </div>
                    </div>
                    <div className="navigation_bar_column nav_icons">
                        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" alt="explore" />
                        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="heart" />
                        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" alt="profile" />
                    </div>
                </nav>
                <MainFeed></MainFeed>
            </div>
        )

    }
}

export default Main;