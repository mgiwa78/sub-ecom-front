import styled from "styled-components/macro";
import { ReactComponent as Glasses } from "../../assets/images/icons/glasses.svg";

export const CategoryMenuContainer = styled.div`
  margin-bottom: 15px;
  padding-bottom: 15px;
  border: 1px solid hsl(0, 0%, 93%);
  padding: 15px;

  width: 300px;

  .disnone {
    display: none;
  }
  ul {
    list-style: none;
  }
  .sidebar-menu-category-list {
    width: 300px;
  }
  .sidebar-menu-category {
    display: flex;
    border-radius: 2px;
    height: 60px;
    align-items: center;
    padding: 10px;
  }
`;
export const ShirtIcon = styled(Glasses)`
  margin-right: 15px;
  width: 50px;
`;
