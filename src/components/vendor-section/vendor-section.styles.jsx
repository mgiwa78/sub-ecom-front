import styled, { css } from "styled-components/macro";

export const VendorSectionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin-top: 60px;
  overflow: auto hidden;
  scroll-snap-type: inline mandatory;
  overscroll-behavior-inline: contain;
  ::-webkit-scrollbar {
    display: none;
  }
`;
