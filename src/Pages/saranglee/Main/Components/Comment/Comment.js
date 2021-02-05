import React, { Component } from 'react';
import Svg from '../../../../../images/saranglee/svg';
import './Comment.scss';

class Comment extends Component {
  render() {
    const { commentList } = this.props;
    return (
      <div className="comment">
        {commentList.map((commentList, index) => {
          return <div key={index} className="comment_written">
            <span className="comment_content">
              <a className="user_id" href="https://www.instagram.com/sadfrogmeme/">pepe_sad</a>
              <p className="comment_text">{commentList}</p>
            </span>
            <img className="comment_like_btn" src={Svg.heart}/>
          </div>
        })}
      </div>
    );
  }
}

export default Comment;