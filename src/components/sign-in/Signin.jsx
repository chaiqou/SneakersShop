import React, { useState } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../../components/customButton/CustomButton";
import { useAuth } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
`;

const SignInTitle = styled.h2`
  margin: 10px 0;
`;

const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Signin = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, signInWithGoogle } = useAuth();
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          login(email, password).then((response) => history.push("/"));
        }}
      >
        <FormInput
          type="email"
          handleChange={handleEmail}
          name="email"
          label="Email"
          required
          value={email}
        />
        <FormInput
          type="password"
          handleChange={handlePassword}
          required
          label="Password"
          value={password}
          name="password"
        />
        <ButtonsBarContainer>
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton onClick={() => signInWithGoogle()} type="button">
            Sign In With Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

export default Signin;
