import React from "react";
import "./Main.scss";

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
  render() {
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
                      <i
                        className="far fa-heart"
                        id="commentHeart"
                        onclick="fillHeartForComment()"
                      ></i>
                    </li>
                    <li>
                      <div>
                        <span className="userAccount">soonapshot</span>
                        <span>I miss you, Dobie</span>
                      </div>
                      <i
                        className="far fa-heart"
                        id="commentHeart"
                        onclick="fillHeartForComment()"
                      ></i>
                    </li>
                  </ul>
                  <p>10 HOURS AGO</p>
                </div>
              </section>
            </article>
            <form className="addComment" onsubmit="return false">
              <input
                className="inputComment"
                type="text"
                placeholder="Add a comment"
              />
              <input className="inputSubmit" value="Post" type="submit" />
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
