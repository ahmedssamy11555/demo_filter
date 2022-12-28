import React from "react";
import { StyledButton } from "./styles/Button.styled";
import { StyledForm } from "./styles/SearchForm.styled";
const SearchForm = ({ searchQuary }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.elements.loaction.value;
    searchQuary(location);
    e.target.elements.loaction.value = "";
  };
  return (
    <StyledForm onSubmit={handleSearch}>
      <input type="text" name="loaction" placeholder="Search Location" />
      <StyledButton>Search</StyledButton>
    </StyledForm>
  );
};

export default SearchForm;
