import React from "react";
import { RiFilter2Fill } from "react-icons/ri";
import { StyledButton } from "./styles/Button.styled";

const Filters = ({ show }) => {
  return (
    <StyledButton onClick={show}>
      <RiFilter2Fill fill="white" />
      <span>Filters</span>
    </StyledButton>
  );
};

export default Filters;
