import React from "react";
import "./Main.scss";
import CommentComp from "../Component/CommentComp";
//import Comment from "./Comments"

import "../../../Styles/reset.scss";
import "../../../Styles/common.scss";

import dobie from "../../../images/yoojin/main/dobie.jpeg";
import dobieprofile from "../../../images/yoojin/main/dobieprofile.jpeg";
import profilepic from "../../../images/yoojin/main/profilepic.jpeg";
import story1 from "../../../images/yoojin/main/story1.jpeg";
import story2 from "../../../images/yoojin/main/story2.jpeg";
import story3 from "../../../images/yoojin/main/story3.jpeg";
import story4 from "../../../images/yoojin/main/story4.jpeg";
import story5 from "../../../images/yoojin/main/story5.jpeg";
import suggest1 from "../../../images/yoojin/main/suggest1.jpeg";
import suggest2 from "../../../images/yoojin/main/suggest2.jpeg";
import suggest3 from "../../../images/yoojin/main/suggest3.jpeg";

class Main extends React.Component {
  constructor() {
    super(); //무조건 있어야한다.
    this.state = {
      //초기 세팅
      comment: "", //comment를 string형태로 비워놓고
      commentList: [], //comment를 모아둘 commentList를 배열 형태로 비워둔다.
    };
  }

  // Main 페이지 안에서 댓글 달기
  //input안에 들어가는 value를 따오기(?)
  commentValue = (e) => {
    //만약 event가 발생한다면; 여기서는 onChange '무언가가 변화했을때~
    this.setState({
      //state를 업데이트한다.
      comment: e.target.value, //원래는 ""로 비어있었던 comment를 e.target.value 즉 이벤트가 일어난 곳의 값을 집어 넣는다.
    });
  };

  //원래 push를 이용해서 댓글을 달아봤는데 원본을 건드리는 push보다 "추가"형식으로 원본을 훼손시키지않는 concat을 써야한다.

  // concat 이용해서 댓글 달기
  // addComment = () => { //click을 하면 발동하는 함수를 만들어주고
  //   if (this.state.comment) { //만약 comment의 value가 있다면
  //     this.setState({ //state를 업데이트 시켜준다.
  //       commentList: this.state.commentList.concat({ //[]로 비어있던 commentList를 concat으로 comment를 집어 넣어줄껀데,
  //         index: Date.now(), //가장 unique한 index인 현재 날짜를 지정해주고
  //         user: "hi_yoojins", //댓글을 올리는 사람 = 나의 이름을 지정해주고
  //         comment: this.state.comment, //위에서 input값에 들어있던 value를 comment로 저장해준다.
  //       }),
  //       comment: "", //state를 바꾼다음엔 (이미 commentList에 쓴 코멘트가 들어간 상태) 다시 comment를 ""로 비워준다.
  //     });
  //   }
  // };

  //spread가 concat보다 좋다는 얘기를 읽어서 한버 해보았다.
  // spread 이용해서 댓글 달기
  addComment = () => {
    //click을 하면 발동하는 함수를 만들어주고
    if (this.state.comment) {
      //만약 comment의 value가 존재 한다면
      this.setState({
        //following을 업뎃할껀데
        commentList: [
          //원래 []로 비어있던 Comment리스트를 spread를 이용해서 채워넣어준다
          ...this.state.commentList, //원래 있었던 commentList에
          {
            //이 객체를 집어넣어준다
            index: Date.now(),
            user: "hi_yoojins",
            comment: this.state.comment,
          },
        ],
        comment: "", //다시 comment를 ""로 비워주고
      });
    }
  };

  enterCommentList = (e) => {
    //event(여기서는 keyup)가 발생했을때
    if (e.key === "Enter" && this.state.comment) {
      //엔ㅌ터를 눌렀고 comment value값이 있을때
      this.addComment(); //addComment함수를 발동시켜라~
    }
  };

  //댓글 삭제 기능...왜 안될까.. 더 고민해보자.
  // deleteComment = (index) => {
  //   const remainedComment = this.state.commentList.filter(
  //     (item) => item.index !== index
  //   );
  //   this.setState({
  //     commentList: remainedComment,
  //   });
  // };

  render() {
    console.log(this.state.commentList);
    return (
      <div>
        <div className="navbar">
          <p className="logo"> Westagram </p>
          <div className="searchContainer">
            <i className="fas fa-search"></i>
            <input className="search" type="text" placeholder="Search" />
          </div>
          <nav className="navIcons">
            <i className="fas fa-home"></i>
            <i className="far fa-paper-plane"></i>
            <i className="far fa-heart"></i>
            <i className="far fa-user"></i>
          </nav>
        </div>
        <main>
          <div className="feeds">
            <div className="stories">
              <div className="story1">
                <img alt="story1" src={story1} />
                <p>03_yjs</p>
              </div>
              <div className="story2">
                <img alt="story2" src={story2} />
                <p>suukju___</p>
              </div>
              <div className="story3">
                <img alt="story3" src={story3} />
                <p>dobie_fan</p>
              </div>
              <div className="story4">
                <img alt="story4" src={story4} />
                <p>anna908</p>
              </div>
              <div className="story5">
                <img alt="story5" src={story5} />
                <p>soonapshot</p>
              </div>
            </div>
            <article>
              <header>
                <div className="accountContainer">
                  <img alt="dobie profile" src={dobieprofile} />
                  <h1> hi_dobie </h1>
                </div>
                <i className="fas fa-ellipsis-h"></i>
              </header>
              <img className="mainImage" alt="dobie" src={dobie} />
              <footer>
                <div className="footerNav">
                  <i
                    className="far fa-heart"
                    id="footerHeart"
                    onClick="fillHeartForFooter()"
                  ></i>
                  <i className="far fa-comment"></i>
                  <i className="far fa-paper-plane"></i>
                </div>
                <div className="footerSave">
                  <i className="far fa-bookmark"></i>
                </div>
              </footer>
              <p className="likes"> 329 likes </p>
              <div className="contentContainer">
                <p className="accountName"> hi_dobie </p>
                <p className="contentDetail"> Dobie's biggest smile ^_^</p>
              </div>
              <section className="comments">
                <div className="commentsLog">
                  <ul className="commentsContainer">
                    <li>
                      <div>
                        <span className="userAccount">suukju___</span>
                        <span> How are y'all?!</span>
                      </div>
                      <div className="heartAndTrash">
                        <i
                          className="far fa-trash-alt"
                          // onClick={this.deleteComment}
                        ></i>
                        <i
                          className="far fa-heart"
                          id="commentHeart"
                          // onclick="fillHeartForComment()"
                        ></i>
                      </div>
                    </li>
                    <li>
                      <div>
                        <span className="userAccount">soonapshot</span>
                        <span>I miss you, Dobie</span>
                      </div>
                      <div className="heartAndTrash">
                        <i
                          className="far fa-trash-alt"
                          type="button"
                          // onClick={this.deleteComment}
                        ></i>
                        <i
                          className="far fa-heart"
                          id="commentHeart"
                          // onclick="fillHeartForComment()"
                        ></i>
                      </div>
                    </li>
                  </ul>

                  <ul className="textbox">
                    {this.state.commentList.map((item) => (
                      <CommentComp
                        user={item.user}
                        comment={item.comment}
                        index={item.index}
                        key={item.key}
                      ></CommentComp>
                    ))}
                  </ul>
                  <p>10 HOURS AGO</p>
                </div>
              </section>
            </article>
            <form className="addComment">
              <input
                className="inputComment"
                type="text"
                placeholder="Add a comment"
                value={this.state.comment}
                onChange={this.commentValue}
                onKeyUp={this.enterCommentList}
              />
              <input
                className="inputSubmit"
                value="Post"
                // type="submit"
                onClick={this.addComment}
              />
            </form>
          </div>
          <div className="main-right">
            <div className="myProfile">
              <img alt="myProfile pic" src={profilepic} />
              <div className="accountInfo">
                <h1>hi_yoojins</h1>
                <h2>Rylie YooJin Suh</h2>
              </div>
            </div>
            <div className="suggestions">
              <div className="header">
                <p className="suggestForYou">Suggestions For You</p>
                <p className="seeAll">See All</p>
              </div>
              <div className="suggestProfiles">
                <div className="suggestProfile1">
                  <div className="imageAndName">
                    <img alt="suggest1" src={suggest1} />
                    <div className="profileContainer">
                      <p className="name">sunah9404</p>
                      <p className="detail">Suggested for you</p>
                    </div>
                  </div>
                  <p className="follow">Follow</p>
                </div>
                <div className="suggestProfile2">
                  <div className="imageAndName">
                    <img alt="suggest2" src={suggest2} />
                    <div className="profileContainer">
                      <p className="name">yejin__ohhh</p>
                      <p className="detail">Followed by soonapshot + 2 more</p>
                    </div>
                  </div>
                  <p className="follow">Follow</p>
                </div>
                <div className="suggestProfile3">
                  <div className="imageAndName">
                    <img alt="suggest3" src={suggest3} />
                    <div className="profileContainer">
                      <p className="name">__bona321</p>
                      <p className="detail">New to Instagram</p>
                    </div>
                  </div>
                  <p className="follow">Follow</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Main;
