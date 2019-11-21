import React from "react";
import styled from "@emotion/styled";

const LogoStyle = styled.h1`
  color: #f2e52e;
  margin: 0;
  font-size: 40px;
  margin-left: 10px;
  letter-spacing: 3px;
`;

export default function Logo({ text }) {
  return <LogoStyle>{text}</LogoStyle>;
}
