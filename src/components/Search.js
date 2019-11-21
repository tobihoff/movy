import React from "react";
import styled from "@emotion/styled";

const SearchBar = styled.input`
  background: white;
  font-size: 12px;
  width: 300px;
  height: 100%
  margin: 5px;
  border: none;
  text-align: center;
  &::placeholder {
    color: #262626;
  };
`;

export default function Search({ placeholder }) {
  return <SearchBar placeholder={placeholder} />;
}
