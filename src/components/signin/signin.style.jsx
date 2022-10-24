import { Col, Row, Container } from "react-bootstrap";
import styled from "styled-components/macro";

export const SignInContainer = styled(Container)`
  background-color: #f2f3f6;
  min-height: calc(100vh - 76px);
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 20px 0;
`;

export const SignInFormContainer = styled.div`
  max-width: 90vw;
  display: flex;
  padding: 40px 30px 60px 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  position: relative;
`;
export const SignInTitle = styled.h3`
  font-size: 27px;
  font-weight: 700;
`;
export const SignInTop = styled(Row)`
  padding-top: 10px;
`;
export const SignInBtm = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const FormInput = styled.input`
  background-color: #f2f3f6;
  border: none;
  border-radius: 3px;
  width: 284px;
  height: 40px;
  padding: 5px 10px;
  font-weight: 400;

  &.push_dwn {
    margin-bottom: 10px;
  }
`;
export const Label = styled.label`
  font-size: 18px;
  font-weight: 500;
`;
export const AuthSelect = styled(Col)`
  border-radius: 2px;
  color: #f2f2f2;
  font-size: 18px;
  cursor: pointer;

  font-weight: 500;
  padding: 3px 6px !important;
  border: 1px solid hsl(0, 0%, 93%);

  &.push {
    margin-right: 10px;
  }
  &:hover {
    color: #fff;
    background-color: #f2f2f2;
  }
`;
export const AuthNav = styled.span`
  color: #f2f2f2;
  margin-top: 20px;
  font-weight: 600;
  position: absolute;
  bottom: 10px;
  cursor: pointer;
`;

export const AuthBtn = styled(Col)`
  color: #696969;
  font-size: 20px;
  font-weight: 600;
  border: 1px solid hsl(0, 0%, 93%);
  background-color: #fff;
  cursor: pointer;
  margin-top: 20px;
  padding: 6px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #f2f2f2;
    color: white;
  }
`;
