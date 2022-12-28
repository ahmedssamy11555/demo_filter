import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.bgColors.button};
  width: fit-content;
  color: ${({ theme }) => theme.colors.button};
  padding: 10px 24px;
  border-radius: 5px;
  outline: none;
  border: none;
  display: flex;

  align-items: center;
  gap: 5px;
  font-weight: 600;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
`;
