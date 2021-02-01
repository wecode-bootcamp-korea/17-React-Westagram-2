import React, { Component } from "react";
import "../Component/Stories.scss";

class Stories extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { name, imgAlt, src, account } = this.props;
    return (
      <div className={name}>
        <img alt={imgAlt} src={src} />
        <p>{account}</p>
      </div>
    );
  }
}

export default Stories;
