import styled, { css } from "styled-components/macro";

import { ReactComponent as Jacket } from "../../assets/images/icons/jacket.svg";
export const VendorItemContainer = styled.div`
  display: flex;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px;
  border: 1px solid hsl(0, 0%, 93%);
  border-radius: 10px;
  scroll-snap-align: start;
  min-width: calc(25% - 15px);
`;
export const VendorImage = styled.div`
  ${({ vendorImg }) => css`
    background-image: url(${vendorImg});
    background-position: center;
    background-size: cover;
  `}
  width: 100px;
`;
export const VendorIcon = styled(Jacket)`
  width: 80px;
  background: hsl(0, 0%, 93%);
  border: 1px solid hsl(0, 0%, 80%);
  padding: 10px;
  border-radius: 5px;
`;
export const VendorName = styled.p``;

export const VendorLink = styled.a`
  color: hsl(353, 100%, 78%);
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: capitalize;
`;
export const VendorDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const VendorContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;
export const VendorAmount = styled.p`
  color: hsl(0, 0%, 47%);
  font-size: 0.625rem;
`;
