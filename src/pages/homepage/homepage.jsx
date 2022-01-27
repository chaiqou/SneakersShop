import React from "react";
import Directory from "../../components/directory/directory";
import styled from 'styled-components'



const StyledHomepage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`



function homePage() {
  return (
    <StyledHomepage>
      <Directory />
    </StyledHomepage>
  );
}

export default homePage;
