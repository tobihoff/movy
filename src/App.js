import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import Movies from "./components/Movies";
import { ThemeProvider } from "emotion-theming";
import theme from "../src/components/themes/themes";
import styled from "@emotion/styled";

const SwitchTheme = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background: ${theme.color.third};
  margin: 10px;
`;

function App() {
  const [movieSearchValue, setMovieSearchValue] = React.useState("Marvel");
  const [themeColor, setThemeColor] = React.useState(theme.color);

  function handleThemeClick() {
    if (themeColor === theme.color) {
      setThemeColor(theme.dark);
    } else {
      setThemeColor(theme.color);
    }
  }

  return (
    <ThemeProvider theme={themeColor}>
      <GlobalStyles />
      <SwitchTheme onClick={handleThemeClick} />
      <Header
        searchValue={movieSearchValue}
        onSearchValueChange={searchValue => setMovieSearchValue(searchValue)}
      />
      <main>
        <Movies searchValue={movieSearchValue} />
      </main>
    </ThemeProvider>
  );
}

export default App;
