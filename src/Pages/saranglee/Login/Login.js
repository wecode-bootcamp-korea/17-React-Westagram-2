import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import '../../../Styles/reset.scss';
import '../../../Styles/common.scss';
import './Login.scss';

import westagramLogo from '../../../images/saranglee/Login/westagramLogo.svg';

class LoginSarang extends Component {

  constructor() {
    super();
    this.state = {
      idValue: '',
      pwValue: '',
      btnOpacity: 0.3
    }
  }

  handleIdInput = (event) => {
    this.setState({
      idValue: event.target.value
    });
  }

  handlePwInput = (event) => {
    this.setState({
      pwValue: event.target.value
    });
  }

  validation = () => {
    this.state.idValue.includes('@') && this.state.pwValue.length >= 5 ? this.setState({btnOpacity: 1}) : this.setState({btnOpacity: 0.3});
  }

  goToMain = () => {
    this.props.history.push('/main-sarang')
  }

  render() {
    return (
      <main className="LoginSarang">
        <div className="logo-login-wrap">
          <img className="logo-img" alt="Westagram Logo" src={ westagramLogo } />
          <div className="login-container" onKeyPress={this.validation}>
            <input 
              className="id-input"
              onChange={this.handleIdInput}
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input 
              className="pw-input"
              onChange={this.handlePwInput}
              type="password"
              placeholder="비밀번호"
            />
            <button 
              style={{opacity: this.state.btnOpacity}} 
              className="login-btn disabled" 
              onClick={this.goToMain}>로그인
            </button>
          </div>
        </div>
        <a className="forgot-pw" href="https://www.instagram.com/accounts/password/reset">비밀번호를 잊으셨나요?</a>
      </main>
    );
  }
}

export default withRouter(LoginSarang);