import React from "react";
import {
  SignInSignUpBtm,
  SignInSignUpContainer,
  SignInSignUpTop,
  AuthBtn,
  SignInSignUpTitle,
  FormInput,
  Label,
  SignInSignUpFormContainer,
  AuthNav,
} from "./signin-signup.style";
import Col from "react-bootstrap/Col";
import SignIn from "../signin/signin.component";

const SignInSignUp = () => {
  return (
    <SignInSignUpContainer fluid>
      <SignIn />
    </SignInSignUpContainer>
  );
};

export default SignInSignUp;
