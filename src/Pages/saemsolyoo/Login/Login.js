import React, { Component } from "react";
import "./Login.scss";
import { withRouter } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
    };
  }

  goToMain = () => {
    this.props.history.push("/main-saemsol");
  };

  handleIdInput = (e) => {
    const userId = e.target.value;

    this.setState({
      id: userId,
    });
  };

  handlePwInput = (e) => {
    const userPw = e.target.value;

    this.setState({
      pw: userPw,
    });
  };

  render() {
    return (
      <div className="login-page">
        <section className="log-in">
          <h1>Westagram</h1>
          <form className="login-form">
            <input
              className="input-id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              required
              onChange={this.handleIdInput}
            />
            <input
              className="input-pw"
              type="password"
              placeholder="비밀번호"
              required
              onChange={this.handlePwInput}
            />
            <a onClick={this.goToMain}>
              <button className="login-btn" type="button">
                로그인
              </button>
            </a>
            <div className="divider">
              <span>또는</span>
            </div>
            <a className="log-in-facebook" href="#">
              <i className="fab fa-facebook-square"></i>
              <span>Facebook으로 로그인</span>
            </a>
          </form>
          <span className="forgot-pw">비밀번호를 잊으셨나요?</span>
        </section>
        <section className="join">
          <span>
            계정이 없으신가요? <a href="#">가입하기</a>
          </span>
        </section>
      </div>
    );
  }
}

export default withRouter(Login);
