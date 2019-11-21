import React from "react";
import { Global, css } from "@emotion/core";

export default function GlobalSytles() {
  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: "Alatsi", sans-serif;
          background-color: #85dcb8;
          font-size: 20px;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}
    />
  );
}
