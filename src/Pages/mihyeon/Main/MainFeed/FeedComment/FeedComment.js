import React, { Component } from 'react';
import './FeedComment.scss';

class FeedComment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comment: '',
            commentList: [],
        }
    }

    handleWriteComment = (e) => {
        e.preventDefault();
        this.setState({
            comment: e.target.value,
        });
    }

    handleUpdateComment = (e) => {
        e.preventDefault();
        console.log(e);

        const obj = {
            id: Date.now(),
            user: "Purple_lol",
            comment: this.state.comment,
        }

        this.setState({
            commentList: [...this.state.commentList, obj],
            comment: '',
        })
    }

    // handleKeyPress = (e) => {
    //     e.preventDefault();
    //     if (e.key === "Enter") {
    //         this.handleUpdateComment();
    //     }
    // }

    handleDeleteComment = (e) => {
        const target = this.state.commentList.filter((item) => {
            return item.id !== Number(e.target.id);
        })
        this.setState({
            commentList: target,
        })
    }

    render() {
        //console.log(this.state.commentList)
        const { commentList } = this.state;
        const commentLiElement = commentList.map((comment, index) => {
            return (
                <div key={index} className="each_comment_list" >
                    <p className="commented_text">{comment.user} | {comment.comment}</p>
                    <p className="commented_text_remove" id={comment.id} key={comment.id} onClick={this.handleDeleteComment}>삭제</p>
                </div>
            )
        })

        return (
            <div className="comment_conatainer">
                <div className="comment"> {commentLiElement}</div>
                <div className="comment_line"></div>
                <form className="comment_write_form">
                    <input aria-label="댓글 달기 " className="comment_input" name="comment" placeholder="댓글달기..." onChange={this.handleWriteComment} value={this.state.comment}></input>
                    <button className="comment_submit_button" onClick={this.handleUpdateComment} >게시</button>
                </form>
            </div>
        );
    }
}

export default FeedComment;