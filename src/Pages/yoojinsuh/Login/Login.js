import React, { Component } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

import "../../../Styles/reset.scss";
import "../../../Styles/common.scss";

import facebook from "../../../images/yoojin/login/facebook.png";
import playstore from "../../../images/yoojin/login/playstore.png";
import appstore from "../../../images/yoojin/login/appstore.png";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleIdInput = (event) => {
    this.setState({
      idValue: event.target.value,
    });
  };

  handlePwInput = (event) => {
    this.setState({
      pwValue: event.target.value,
    });
  };

  loginKeyup = () => {
    this.state.idValue.includes("@") && this.state.pwValue.length > 5
      ? this.setState({ buttonChange: "darkBtn" })
      : this.setState({
          buttonChange: "lightBtn",
        });
  };

  render() {
    return (
      <div className="body">
        <div className="loginContainer">
          <h1>Westagram</h1>
          <div className="inputContainer" onKeyUp={this.loginKeyup}>
            <input
              className="id"
              name="idInput"
              type="text"
              placeholder="Phone number, username, or email"
              onChange={this.handleIdInput}
              value={this.state.idValue}
            />
            <input
              className="password"
              name="pwInput"
              type="password"
              placeholder="Password"
              onChange={this.handlePwInput}
              value={this.state.pwValue}
            />
            <Link to="/main-yoojin">
              <button className={this.state.buttonChange} type="button">
                Log In
              </button>
            </Link>
          </div>
          <div className="orContainer">
            <div className="left"></div>
            <p>OR</p>
            <div className="right"></div>
          </div>
          <div className="loginFacebook">
            <img alt="facebook logo" src={facebook} />
            <p>Log in with Facebook</p>
          </div>
          <span>Forgot password?</span>
        </div>
        <div className="noAccount">
          <h5>
            Don't have an account? <span>Sign up</span>
          </h5>
        </div>
        <div className="getTheApp">
          <h3> Get the app. </h3>
          <div className="appImage">
            <img alt="appstore logo" src={appstore} />
            <img alt="playstore logo" src={playstore} />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
