import React from "react";
import CollectionItem from "../collection-item/Collection-item";
// import styles
import "./collection-preview.styles.scss";

const CollectionPreview = ({ items, title }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...otherProps }) => (
            <CollectionItem key={id} {...otherProps}></CollectionItem>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
