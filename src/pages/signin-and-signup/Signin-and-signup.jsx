import React from "react";
import SignIn from "../../components/sign-in/Signin";
import SignUp from "../../components/sign-up/SignUp";
import styled from 'styled-components'

const StyledSignUpandSignIn = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 50px auto;
`


const Signinandsignup = () => {
  return (
    <StyledSignUpandSignIn>
      <SignIn />
      <SignUp />
    </StyledSignUpandSignIn>
  );
};

export default Signinandsignup;
