import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import NavBar from '../components/NavBar';
import MovieCard from '../components/MovieCard';

export default function SearchResultsPage() {
  return (
    <Container maxWidth='sm'>
      <NavBar />
      <Box my={10}>
        <MovieCard name="Tha Matrix" year={2000} />
        <MovieCard name="Akira" year={1987} />
      </Box>
    </Container>
  );
}