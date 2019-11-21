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

export default function Search({ placeholder }) {
  return <SearchBar placeholder={placeholder} />;
}
