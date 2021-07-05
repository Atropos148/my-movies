import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import NavBar from '../components/NavBar';
import MovieCard from '../components/MovieCard';

const TEST_DATA = [
  {
    "Title": "The Matrix",
    "Year": "1999",
    "imdbID": "tt0133093",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
  },
  {
    "Title": "Akira",
    "Year": "1988",
    "imdbID": "tt0094625",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BM2ZiZTk1ODgtMTZkNS00NTYxLWIxZTUtNWExZGYwZTRjODViXkEyXkFqcGdeQXVyMTE2MzA3MDM@._V1_SX300.jpg"
  },
]

export default function FavoritesPage() {
  return (
    <Container>
      <NavBar />
      <Box>
        {TEST_DATA.map((movie) => {
          return <MovieCard key={movie.imdbID} title={movie.Title} year={movie.Year} posterLink={movie.Poster} />
        })}
      </Box>
    </Container>
  );
}