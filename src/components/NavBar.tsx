import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';
import { FormEvent, useState } from 'react';

import { api_key } from '../api_key';

import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    marginBottom: 5,
  },

  toolbar: {
    paddingTop: 10,
    paddingBottom: 10,
  },

  searchBar: {
    color: 'orange',
    borderRadius: 10,
    paddingLeft: 5,
    marginLeft: 5,
  },

  button: {
    borderRadius: '10px',
    marginLeft: '5px',
  }
})

export default function NavBar() {
  const [searchMovie, setSearchMovie] = useState('')
  let history = useHistory();

  const handleMovieSearch = (e: FormEvent) => {
    e.preventDefault();
    let searchUrl = 'http://www.omdbapi.com/?s=' + searchMovie + '&page=1&apikey=' + api_key;
    let searchResult = fetch(searchUrl).then(response => response.json()).then(data => console.log(data));
    history.push('/search')
  }

  function moveToMainPage() {
    history.push('/');
  }
  function moveToFavorites() {
    history.push('/favorites');
  }

  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="sticky">
      <Toolbar className={classes.toolbar} >
        <Button className={classes.button} onClick={moveToMainPage}>Main Page</Button>
        <Button className={classes.button} onClick={moveToFavorites}>Favorites</Button>

        <form onSubmit={handleMovieSearch}>
          <TextField
            id='movieSearch'
            className={classes.searchBar}
            type="search" variant="filled"
            label=" Search Movie "
            onChange={(e) => setSearchMovie(e.target.value)}
          />
        </form>
      </Toolbar>
    </AppBar>
  )
}