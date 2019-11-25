import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import Movies from "./components/Movies";

function App() {
  const [movieSearchValue, setMovieSearchValue] = React.useState("Marvel");

  return (
    <>
      <GlobalStyles />
      <Header
        searchValue={movieSearchValue}
        onSearchValueChange={searchValue => setMovieSearchValue(searchValue)}
      />
      <main>
        <Movies searchValue={movieSearchValue} />
      </main>
    </>
  );
}

export default App;
