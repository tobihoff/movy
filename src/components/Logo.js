import React from "react";
import styled from "@emotion/styled";

const LogoStyle = styled.h1`
  margin: 0;
  font-size: 40px;
  margin-left: 10px;
  letter-spacing: 3px;
  color: ${props => (props.isYellow ? "#f2e52e" : "blue")};
  border: ${props => (props.isNoneBorder ? "none" : "2px solid white")};
`;

export default function Logo({ text }) {
  const [isYellow, setIsYellow] = React.useState(true);
  const [isNoneBorder, setIsNoneBorder] = React.useState(true);

  return (
    <LogoStyle
      onClick={() => {
        setIsYellow(!isYellow);
        setIsNoneBorder(!isNoneBorder);
      }}
      isYellow={isYellow}
      isNoneBorder={isNoneBorder}
    >
      {text}
    </LogoStyle>
  );
}
