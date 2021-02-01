import React, { Component } from "react";
import "./Login.scss";
import { withRouter } from "react-router-dom";

import "../../../Styles/reset.scss";
import "../../../Styles/common.scss";

import facebook from "../../../images/yoojin/login/facebook.png";
import playstore from "../../../images/yoojin/login/playstore.png";
import appstore from "../../../images/yoojin/login/appstore.png";

class Login extends Component {
  constructor() {
    super();
    this.state = { id: "", password: "" };
  }

  goToMain = () => {
    this.props.history.push("/main-yoojin");
  };

  handleAllInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  loginKeyup = () => {
    this.state.id.includes("@") && this.state.password.length > 5
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
              name="id"
              type="text"
              placeholder="Phone number, username, or email"
              onChange={this.handleAllInput}
              value={this.state.id}
            />
            <input
              className="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={this.handleAllInput}
              value={this.state.pw}
            />
            <button
              className={this.state.buttonChange}
              type="button"
              onClick={this.goToMain}
            >
              Log In
            </button>
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

export default withRouter(Login);
