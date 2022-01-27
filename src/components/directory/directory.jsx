import React from "react";
import MenuItem from "../menu-item/menu-item";
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectDirectorySection} from '../../redux/directory/directory.selectors'
// import styles
import "../directory/directory.styles.scss";



const Directory = ({sections}) => {
  
  return (
    <>
      <div className="directory-menu">
        {sections.map(({id , ...otherProps }) => (
          <MenuItem  key={id} {...otherProps} />
        ))}
      </div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection,
})

export default connect(mapStateToProps)(Directory);
