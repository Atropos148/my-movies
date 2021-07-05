import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import NavBar from '../components/NavBar';

export default function FavoritesPage() {
  return (
    <Container>
      <NavBar />
      <Box justifyContent="center">
        <h1>Hello! This is my testing React app!</h1>
        <h2>It was supposed to be a movie search app, but Redux and Redux-saga is very hard to work with. At least to me, at this point.</h2>
        <p>The navigation between main page, Favorites Page and search results page is working.</p>
        <p>Favorites are hard coded, as are the search results. Data used there is pulled from the real omdbapi</p>
      </Box>
    </Container>
  );
}