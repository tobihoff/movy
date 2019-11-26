import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const Form = styled.form`
  flex-grow: 1;
`;

const SearchBar = styled.input`
  font-size: 12px;
  width: 100%;
  height: 100%;
  border: none;
  text-align: center;
  &::placeholder {
    color: #262626;
  }
`;

function upperCaseFirstChar(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Search({ value, onChange }) {
  const [movieName, setMovieName] = React.useState(value);

  function handleSubmit(event) {
    event.preventDefault();
    onChange(movieName);
  }

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      onChange(movieName);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [movieName]);

  return (
    <Form onSubmit={handleSubmit}>
      <SearchBar
        autoFocus
        placeholder="Search..."
        value={movieName}
        onChange={event => {
          const newSearchValue = upperCaseFirstChar(event.target.value);
          setMovieName(newSearchValue);
        }}
      />
    </Form>
  );
}
