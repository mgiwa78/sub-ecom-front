import styled from "styled-components/macro";

export const Navcontainer = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-around;
  width: 100%;
  padding: 30px 0;
`;
export const NavItems = styled.li`
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 700;

  a {
    text-decoration: none;
    color: hsl(0, 0%, 27%);
  }
`;
