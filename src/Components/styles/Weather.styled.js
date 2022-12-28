import styled from "styled-components";

export const Right = styled.div`
  color: ${({ theme }) => theme.colors.mainfont};
  font-size: ${({ theme }) => theme.fontSize.main};
  font-weight: ${({ theme }) => theme.fontWeight.main};
`;
export const Left = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.secFont};
  font-size: ${({ theme }) => theme.fontSize.sec};
  font-weight: ${({ theme }) => theme.fontWeight.sec};
  align-items: center;
  gap: 5px;
`;

export const Starter = styled.div`
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.secFont};
  font-size: ${({ theme }) => theme.fontSize.sec};
  height: 100%;
  align-items: center;
`;
