import styled from "styled-components/macro";

export const ItemMdContainer = styled.div`
  width: calc(25% - 20px);
  border: 1px solid hsl(0, 0%, 93%);
  border-radius: 10px;
  padding: 15px;
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 15px;

  .showcase-title {
    color: hsl(0, 0%, 27%);
    font-size: 0.875rem;
    font-weight: 400;
    text-transform: capitalize;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    letter-spacing: 0.5px;
  }
  .showcase-rating {
    display: flex;
    align-items: center;
    color: hsl(29, 90%, 65%);
    font-size: 13px;
    padding: 4px 0;
  }
  .sidebar .price-box del {
    color: hsl(0, 0%, 47%);
    font-size: 13px;
  }

  .sidebar .price-box .price {
    font-size: 0.875rem;
    font-weight: 600;
    color: hsl(0, 0%, 33%);
  }
  .price-box {
    display: flex;
  }
  .price {
    margin-right: 30px;
  }
  .showcase-badge {
    position: absolute;
    top: 10px;
    background-color: #0080008d;
    border-radius: 20px;
    color: white;
    padding: 5px;
  }
  .showcase-category {
    text-transform: capitalize;
    text-decoration: none;
    color: hsl(353, 100%, 78%);
    font-weight: 400;
  }
`;

export const AddBtn = styled.div`
  width: calc(50%);
  border-radius: 5px;
  padding: 4px 0;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  color: #000;
  cursor: pointer;

  &:hover {
    background-color: hsl(353, 100%, 78%);
    color: #fff;
  }
`;
