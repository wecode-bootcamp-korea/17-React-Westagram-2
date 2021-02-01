import React, { Component } from 'react';

class CommentList extends Component {


    render() {
        const { key, name, comment } = this.props;
        return (
            <div key={key} className="each_comment_list" >
                <p className="commented_text">{name} | {comment}</p>
                <p className="commented_text_remove" id={key} key={key} onClick={this.handleDeleteComment}>삭제</p>
            </div>
        );
    }
}

export default CommentList;