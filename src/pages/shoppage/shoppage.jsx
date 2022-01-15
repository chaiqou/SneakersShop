import React, { useState } from "react";
import SHOP_DATA from "../shoppage/shoppage.data";
import CollectionPreview from "../../components/collection-preview/collection-preview";
// import styles
import "./shoppage.styles.scss";

const Shoppage = () => {
  const [collections, setCollections] = useState(SHOP_DATA);
  return (
    <div>
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default Shoppage;
