import React from "react";
import MenuItem from "../menu-item/menu-item";
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectDirectorySection} from '../../redux/directory/directory.selectors'
import styled from 'styled-components'

const DirectoryContainer = styled.div`
 width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

`



const Directory = ({sections}) => {
  
  return (
    <>
      <DirectoryContainer>
        {sections.map(({id , ...otherProps }) => (
          <MenuItem  key={id} {...otherProps} />
        ))}
      </DirectoryContainer>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection,
})

export default connect(mapStateToProps)(Directory);
