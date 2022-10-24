import styled, { css } from "styled-components/macro";

export const HeroSlideContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  .btn {
    background-color: hsl(353, 100%, 78%);
    border: none;
    color: white;
    font-size: 22px;
    font-weight: 700;
    width: 300px;
    padding: 10px 0;
    border-radius: 10px;
    height: 50px;
    margin-top: 20px;
  }
`;
export const HeroSlide = styled.div`
  ${({ bgimg }) =>
    css`
      background-image: url(${bgimg});
      background-position: center;
      background-size: cover;
    `}
  height:550px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  padding: 0px 100px;

  border-radius: 10px;

  width: 100%;
`;
export const HeroText = styled.div`
  font-size: 2.925rem;
  font-weight: 700;
  width: 500px;
`;
export const HeroTitle = styled.div`
  font-size: 1.625rem;
  font-weight: 600;

  color: hsl(353, 100%, 78%);
`;
export const HeroBody = styled.div``;
export const HeroDescription = styled.div`
  font-size: 1.375rem;
`;
export const HeroBtn = styled.div`
  font-size: 0.875rem;
  padding: 7px 20px;
`;
