import React from "react";
import styled from "@emotion/styled";
import Logo from "./Logo";

const AppBar = styled.header`
  background-color: #41b3a3;
  height: 50px;
`;

export default function Header() {
  return (
    <AppBar>
      <Logo text="Movy" />
    </AppBar>
  );
}
