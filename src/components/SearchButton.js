import React from "react";
import styled from "@emotion/styled";
import search from "../components/assets/search.svg";
import cancel from "../components/assets/cancel.svg";
//import { keyframes } from "@emotion/core";

const SearchButtonStyle = styled.button`
  height: 100%;
  border: none;
  flex-shrink: 0;
  width: 64px;
  background: transparent;
`;

const Icon = styled.img`
  margin: 4px;
  margin-right: 5px;
`;

export default function({ active, onClick }) {
  return (
    <SearchButtonStyle onClick={onClick}>
      <Icon active={active} src={active ? cancel : search} />
    </SearchButtonStyle>
  );
}
