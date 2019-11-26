export async function getDiscoverMovies(query) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`
  );
  const data = await response.json();
  await waitFor(100);
  return data.results;
}

function waitFor(milliseconds) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, milliseconds);
  });
}
