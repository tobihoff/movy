import React from "react";
import styled from "@emotion/styled";
import Logo from "./Logo";
import Search from "./Search";
import SearchButton from "./SearchButton";

const AppBar = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #41b3a3;
  height: 50px;
`;

export default function Header() {
  return (
    <AppBar>
      <Logo text="Movy" />
      <Search placeholder="Search for great movies" />
      <SearchButton text="Search" />
    </AppBar>
  );
}
