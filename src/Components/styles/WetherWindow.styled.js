import styled from "styled-components";

export const StyledWeatherWindow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 30px;
`;

export const WetherItem = styled.div`
  span:nth-child(1) {
    color: ${({ theme }) => theme.colors.mainfont};
    font-size: ${({ theme }) => theme.fontSize.main};
    font-weight: ${({ theme }) => theme.fontWeight.main};
  }
  span:nth-child(2) {
    color: ${({ theme }) => theme.colors.secFont};
    font-size: ${({ theme }) => theme.fontSize.sec};
    font-weight: ${({ theme }) => theme.fontWeight.sec};
  }
`;
export const TempItem = styled.div`
  display: flex;
  gap: 5px;
`;
