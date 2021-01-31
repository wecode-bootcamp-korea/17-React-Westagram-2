import React, { Component } from 'react';

class FeedComment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comment: '',
            commentList: [],
            commentUser: 'thunder'
        }
        this.commentRef = React.createRef();

    }
    handleWriteComment = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    handleUpdateComment = (e) => {
        this.setState({
            commentList: [...this.state.commentList, this.state.comment],
            comment: ''
        })
        console.log(this.state.commentList);
    }
    handleDeleteComment = (e) => {
        const submitedRef = this.commentRef.current;
        const target = parseInt(submitedRef.attributes["data-index"])
        this.setState({
            commentList: this.state.commentList.splice(target, 1)
        })
        //console.log(this.state.commentList);
        //submitedRef.parentNode.remove();
        //target.remove();
    }

    render() {
        const { commentUser, commentList } = this.state;
        const commentLiElement = commentList.map((comment, index) => {
            return (
                <div key={index} className="comment_container" data-index={index}>
                    <p>{commentUser} | {comment}</p>
                    <p key={index} data-index={index} onClick={this.handleDeleteComment} ref={this.commentRef}>삭제</p>
                </div>
            )
        })

        return (
            <div className="comment_conatainer">
                <div className="comment"> {commentLiElement}</div>
                <div className="comment_line"></div>
                <form className="comment_write_form" >
                    <textarea aria-label="댓글 달기 " className="comment_input" name="comment" placeholder="댓글달기..." onChange={this.handleWriteComment} value={this.state.comment} ></textarea>
                    <button className="comment_submit_button" type="button" onClick={this.handleUpdateComment}>게시</button>
                </form>
            </div>
        );
    }
}

export default FeedComment;