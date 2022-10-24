import styled from "styled-components/macro";
import { ReactComponent as User } from "../../assets/images/icons/user-1.svg";
import { ReactComponent as Cart } from "../../assets/images/icons/cart-1.svg";

export const Headercontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid hsl(0, 0%, 93%);
  .container {
    min-width: 1650px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export const HeaderLogo = styled.a`
  margin-bottom: 20px;

  img {
    margin: auto;
  }
`;
export const HeaderSearch = styled.a`
  position: relative;

  .search-field {
    width: 900px;
    height: 50px;

    font-size: 1.275rem;
    color: hsl(0, 0%, 27%);
    padding: 10px 15px;
    padding-right: 50px;
    border: 1px solid hsl(0, 0%, 93%);
    border-radius: 5px;
  }

  .search-field::-webkit-search-cancel-button {
    display: none;
  }

  .search-btn {
    background: hsl(0, 100%, 100%);
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    color: hsl(0, 0%, 27%);
    font-size: 18px;
    padding: 8px 15px;
    border-radius: 10px;
    transition: color 0.5s ease;
  }

  .search-btn:hover {
    color: hsl(353, 100%, 78%);
  }
`;
export const HeaderActions = styled.div`
  display: flex;
  align-items: center;

  .action-btn {
    position: relative;
    font-size: 35px;
    color: var(--onyx);
    padding: 5px;
  }

  .count {
    position: absolute;
    top: -2px;
    right: -3px;
    background: var(--bittersweet);
    color: var(--white);
    font-size: 12px;
    font-weight: var(--weight-500);
    line-height: 1;
    padding: 2px 4px;
    border-radius: 20px;
  }
`;

export const CartContainer = styled.div`
  position: relative;

  .cart-num {
    position: absolute;
    top: -10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: 600;
    right: -8px;
    font-size: 13px;
    background-color: hsl(0, 0%, 100%);
    color: #000;
    padding: 5px;
    border-radius: 20px;
    width: 20px;
    height: 20px;
  }
`;
export const UserIcon = styled(User)``;
export const CartIcon = styled(Cart)``;
export const ActionsContianer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(353, 100%, 78%);
  width: 50px;
  height: 50px;

  border-radius: 50px;
  &.user {
    margin-right: 20px;
  }
`;
