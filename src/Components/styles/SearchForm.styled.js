import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 15px;
  position: absolute;
  width: 100%;
  bottom: 0;
  input {
    padding: 15px;
    flex: 1;
    border-radius: 5px;
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.buttonBorder};
    &hover {
      outline: none;
    }
  }
`;
