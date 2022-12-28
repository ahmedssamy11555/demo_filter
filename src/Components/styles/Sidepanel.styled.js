import styled from "styled-components";

export const StyledSidePanel = styled.div`
  /* height: 100vh; */
  width: 492px;
  position: absolute;
  transform: translateX(100%);
  right: 0;
  z-index: 100;
  top: 0;
  box-shadow: 0px -2px 4px rgba(198, 198, 198, 0.25),
    0px 0px 4px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.06);
  height: 100vh;
  background-color: ${({ theme }) => theme.bgColors.body};
  transition: 1s;
  display: flex;
  flex-direction: column;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 4px rgba(198, 198, 198, 0.25);
  font-weight: 600;
  padding: 15px;
  color: ${({ theme }) => theme.colors.mainfont};
  span {
    font-size: ${({ theme }) => theme.fontSize.main};
    text-transform: capitalize;
  }
  svg {
    cursor: pointer;
  }
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Backdrop = styled.div`
  position: absolute;
  inset: 0;
  background-color: black;
  opacity: 50%;
  transform: translateX(100%);
`;
