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
import SignIn from "../../components/signin/signin.component";
import { Outlet } from "react-router";

const SignInSignUp = () => {
  return (
    <SignInSignUpContainer fluid>
      <Outlet></Outlet>
    </SignInSignUpContainer>
  );
};

export default SignInSignUp;
