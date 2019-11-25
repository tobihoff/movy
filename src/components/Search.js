import React from "react";
import styled from "@emotion/styled";

const SearchBar = styled.input`
  font-size: 12px;
  width: 100%;
  height: 100%;
  border: none;
  text-align: center;
  &::placeholder {
    color: #262626;
  }
`;

export default function Search({ value, onChange }) {
  function upperCaseFirstChar(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function handleChange(event) {
    const newSearchValue = upperCaseFirstChar(event.target.value);
    onChange(newSearchValue);
  }

  return (
    <SearchBar
      placeholder="Find me..."
      value={value}
      onChange={event => {
        handleChange(event);
      }}
    />
  );
}
