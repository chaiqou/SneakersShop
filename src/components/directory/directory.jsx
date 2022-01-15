import React, { useState } from "react";
import MenuItem from "../menu-item/menu-item";
// import styles
import "../directory/directory.styles.scss";

const sectionData = [
  {
    title: "Nike",
    imageUrl: "https://i.ibb.co/86zBVMv/pexels-gustavo-gimenez-8979071.jpg",
    id: 1,
    linkUrl: "shop/nike",
  },
  {
    title: "Adidas",
    imageUrl: "https://i.ibb.co/zQhTwd8/pexels-the-happiest-face-1225136.jpg",
    id: 2,
    linkUrl: "shop/adidas",
  },
  {
    title: "Puma",
    imageUrl: "https://i.ibb.co/cFmDVQZ/pexels-suraj-b-2759785.jpg",
    id: 3,
    linkUrl: "shop/puma",
  },
  {
    title: "Womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    size: "large",
    id: 4,
    linkUrl: "shop/womens",
  },
  {
    title: "Mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    size: "large",
    id: 5,
    linkUrl: "shop/mens",
  },
];

const Directory = () => {
  const [section, setSection] = useState(sectionData);
  return (
    <>
      <div className="directory-menu">
        {section.map(({id , ...otherProps }) => (
          <MenuItem  key={id} {...otherProps} />
        ))}
      </div>
    </>
  );
};

export default Directory;
