import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import Movies from "./components/Movies";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <Movies />
      </main>
    </>
  );
}

export default App;
