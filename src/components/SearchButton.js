import React from "react";
import styled from "@emotion/styled";
import search from "../components/assets/search.svg";
import cancel from "../components/assets/cancel.svg";

const SearchButtonStyle = styled.button`
  height: 100%;
  border: none;
  flex-shrink: 0;
  width: 64px;
  background: transparent;
`;

const Icon = styled.img`
  height: 70%;
  margin-right: 5px;
`;

export default function() {
  return (
    <SearchButtonStyle>
      <Icon src={cancel} alt="Search Icon" />
    </SearchButtonStyle>
  );
}
