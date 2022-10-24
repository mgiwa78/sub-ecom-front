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
import Header from "../../components/header/header.component";
import Nav from "../../components/nav/nav.component";

const SignInSignUp = () => {
  return (
    <SignInSignUpContainer fluid>
      <Header />
      <Outlet></Outlet>
    </SignInSignUpContainer>
  );
};

export default SignInSignUp;
