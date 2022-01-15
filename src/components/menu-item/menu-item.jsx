import React from "react";
import { withRouter } from "react-router-dom";
// import styles
import "../menu-item/menu-item.styles.scss";

function menuItem({ title, size, imageUrl, linkUrl, match }) {
  return (
    <>
      <div
        className={`${size} menu-item`}
        onClick={() => window.history.push(`${match.url} ${linkUrl}`)}
      >
        <div
          className="background-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="content">
          <h1 className="title">{title}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </>
  );
}

export default withRouter(menuItem);
