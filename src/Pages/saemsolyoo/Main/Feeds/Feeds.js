import React, { Component } from "react";
import Stories from "./Stories/Stories";
import Feed from "./Feed/Feed";
import "./Feeds.scss";

class Feeds extends Component {
  constructor() {
    super();
    this.state = {
      newComment: "",
      comments: [],
      disabled: true,
      stories: [],
      feeds: [],
    };
  }

  componentDidMount() {
    fetch("/data_saemsolyoo/storyData.json")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          stories: data,
        });
      });

    fetch("/data_saemsolyoo/feedData.json")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          feeds: data,
        });
      });
  }

  updateComment = () => {
    const newComment = this.state.newComment;
    this.setState({
      comments: this.state.comments.concat(newComment),
      newComment: "",
    });
  };

  activeSubmitBtn = (e) => {
    if (e.target.value.length > 0) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  };

  getComment = (e) => {
    e.preventDefault();
    this.activeSubmitBtn(e);

    this.setState({ newComment: e.target.value });

    if (e.key === "Enter" && this.state.newComment) {
      this.updateComment();
      e.target.value = "";
    }

    if (e.target.localName === "button" && this.state.newComment) {
      this.updateComment();
      e.target.parentElement[0].value = "";
    }
  };

  render() {
    return (
      <div className="main-container">
        <main>
          <Stories datas={this.state.stories} />
          <article className="main-feed" id="feed00">
            <header>
              <a href="#" className="feed-profile">
                <img
                  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/19051108_1939872686231313_4572090551716806656_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=-J4YglxHgucAX-dOt2F&tp=1&oh=5a7e3dc2779b4660b651f73847197d94&oe=6031D052"
                  alt="profile image"
                />
              </a>
              <div className="feed-info">
                <a href="#">saemsolyoo</a>
                <a href="#">SF MOMA</a>
              </div>
              <a href="#">
                <i className="fas fa-ellipsis-h" />
              </a>
            </header>
            <img
              className="feed-image"
              src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/23507545_133005887469544_8521983549337763840_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=kWEdQtvavbQAX_p27jY&tp=1&oh=ace23adf6cbcf9364060159834f7a3f9&oe=6030F535"
              alt="feed image"
            />
            <div className="feed-comment">
              <div className="feed-icons">
                <div className="feed-icons-left">
                  <i className="far fa-heart" />
                  <i className="far fa-comment" />
                  <i className="far fa-paper-plane" />
                </div>
                <i className="far fa-bookmark" />
              </div>
              <span className="feed-likes">좋아요 325개</span>
              <ul className="feed-comment-list">
                {this.state.comments.map((comment) => {
                  return (
                    <li>
                      <a href="#">saemsolyoo</a>
                      <span>{comment}</span>
                    </li>
                  );
                })}
              </ul>
              <span className="feed-uploaded-time">30분 전</span>
            </div>

            <form action="" className="feed-comment-form">
              <input
                type="text"
                className="feed-comment-input"
                placeholder="댓글 달기..."
                onKeyUp={this.getComment}
              />
              <button
                className="feed-comment-submit"
                type="submit"
                disabled={this.state.disabled}
                onClick={this.getComment}
              >
                게시
              </button>
            </form>
          </article>
          <Feed feedDatas={this.state.feeds} setComment={this.setComment} />
        </main>
        <aside>
          <div className="my-profile">
            <img
              src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/23417167_1609299152461008_1179526000917086208_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=fPNabOAM1wEAX8mQpdE&tp=1&oh=1fce74fa73498220300fac882eec9bff&oe=6033933B"
              alt="profile image"
            />
            <div className="my-profile-info">
              <span>saemsolyoo</span>
              <span>샘솔</span>
            </div>
            <span>전환</span>
          </div>
          <div className="recommend-profile">
            <div>
              <h4>회원님을 위한 추천</h4>
              <span>모두 보기</span>
            </div>
            <ul>
              <li>
                <img
                  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c1.0.1077.1077a/s640x640/22858338_1106578569477425_3776900631290183680_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=UOQrQ3cPcrYAX-H6MRr&tp=1&oh=c730b33ee582e0d1de67de1c2e534329&oe=6035128B"
                  alt="profile image"
                />
                <div>
                  <span>saemsolyoo</span>
                  <span>샘솔</span>
                </div>
                <span>팔로우</span>
              </li>
              <li>
                <img
                  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/23416744_1509612842408168_4385556359660175360_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=wQdEUlyM43MAX-oCI0e&tp=1&oh=2bed43f88e471481628ee905893acaf4&oe=6033C0F0"
                  alt="profile image"
                />
                <div>
                  <span>my_nameis_berry</span>
                  <span>berry님 외 1명이 팔로우합니다</span>
                </div>
                <span>팔로우</span>
              </li>
              <li>
                <img
                  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/23498986_537313673268094_3196332077775585280_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=e3zZrZUyysoAX-9uGvB&tp=1&oh=5e8f991a5d2f7e12c93e4a6e5d1bf38e&oe=603486B3"
                  alt="profile image"
                />
                <div>
                  <span>saemsolyoo</span>
                  <span>Instagram 신규 가입</span>
                </div>
                <span>팔로우</span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    );
  }
}

export default Feeds;
