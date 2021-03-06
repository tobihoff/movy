import React from "react";
import styled from "@emotion/styled";
import Logo from "./Logo";
import Search from "./Search";
import SearchButton from "./SearchButton";
import PropTypes from "prop-types";

const AppBar = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: ${props =>
    props.active ? "white" : props => props.theme.secondary};
  height: 50px;
`;

export default function Header({ searchValue, onSearchValueChange }) {
  const [showSearch, setShowSearch] = React.useState(false);

  return (
    <AppBar active={showSearch}>
      {!showSearch && <Logo text="Movy" />}
      {showSearch && (
        <Search value={searchValue} onChange={onSearchValueChange} />
      )}
      <SearchButton
        active={showSearch}
        onClick={() => setShowSearch(!showSearch)}
      />
    </AppBar>
  );
}

Header.propTypes = {
  searchValue: PropTypes.string,
  onSearchValueChange: PropTypes.func
};
