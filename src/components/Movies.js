import React from "react";
import { getDiscoverMovies } from "../api/movies";
import styled from "@emotion/styled";

const List = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Poster = styled.img`
  width: 100px;
  padding: 10px;
`;

export default function Movies() {
  const [movies, setMovies] = React.useState([]);

  console.log(movies);
  async function refreshMovies() {
    const discoverMovies = await getDiscoverMovies();
    setMovies(discoverMovies);
  }
  React.useEffect(() => {
    refreshMovies();
  }, []);

  return (
    <List>
      {movies.map(movie => (
        <Poster
          key={movie.id}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      ))}
    </List>
  );
}
