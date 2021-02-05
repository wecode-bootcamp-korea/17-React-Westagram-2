import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ProjectMain.scss";

class ProjectMain extends Component {
  render() {
    return (
      <div className="namesContainer">
        <Link to="/login-miheyon">미현</Link>
        <Link to="/login-saemsol">샘솔</Link>
        <Link to="/login-sarang">사랑</Link>
        <Link to="/login-yoojin">유진</Link>
      </div>
    );
  }
}

export default ProjectMain;
