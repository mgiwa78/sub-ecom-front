import React from "react";
import {
  SignUpBtm,
  SignUpContainer,
  SignUpTop,
  AuthBtn,
  SignUpTitle,
  FormInput,
  Label,
  SignUpFormContainer,
  AuthNav,
  AuthSelect,
} from "./signup.style";
import Col from "react-bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const Navigate = useNavigate();

  return (
    <SignUpContainer fluid>
      <SignUpFormContainer>
        <SignUpTitle>Sign up as</SignUpTitle>
        <SignUpTop fluid>
          <AuthSelect className="push" xs={"auto"}>
            An Employer
          </AuthSelect>

          <AuthSelect xs={"auto"}>A Worker</AuthSelect>
        </SignUpTop>
        <SignUpBtm>
          <Label>Full Name:</Label>
          <FormInput className="push_dwn" />
          <Label>Phone Number:</Label>
          <FormInput type={"number"} className="push_dwn" />
          <Label>Email:</Label>
          <FormInput className="push_dwn" />
          <Label>Password:</Label>

          <FormInput />
        </SignUpBtm>
        <AuthBtn xs={12}> Sign Up</AuthBtn>
        <AuthNav onClick={() => Navigate("/auth")}>
          Already have an account? Sign in
        </AuthNav>
      </SignUpFormContainer>
    </SignUpContainer>
  );
};

export default SignUp;
