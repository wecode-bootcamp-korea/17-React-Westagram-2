import React, { Component } from "react";
import "../Component/Suggestion.scss";

class Suggestion extends Component {
  render() {
    const { id, name, profileName, imgAlt, src, detail } = this.props;
    return (
      <div className={name} id={id}>
        <div className="imageAndName">
          <img alt={imgAlt} src={src} />
          <div className="profileContainer">
            <p className="name">{profileName}</p>
            <p className="detail">{detail}</p>
          </div>
        </div>
        <p className="follow" type="button">
          Follow
        </p>
      </div>
    );
  }
}

export default Suggestion;
