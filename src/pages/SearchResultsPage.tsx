import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import NavBar from '../components/NavBar';
import MovieCard from '../components/MovieCard';

const TEST_DATA = [
  {
    "Title": "Akira",
    "Year": "1988",
  },
  {
    'Title': 'Matrix',
    'Year': '1999',
  },
  {
    "Title": "The Matrix Reloaded",
    "Year": "2003",
  }
]

export default function SearchResultsPage() {
  return (
    <Container maxWidth='sm'>
      <NavBar />
      <Box my={10}>
        {TEST_DATA.map((movie) => {
          return <MovieCard title={movie.Title} year={movie.Year} />
        })}
      </Box>
    </Container>
  );
}