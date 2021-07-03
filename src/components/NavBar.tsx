import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  searchBar: {
    backgroundColor: 'white',
    borderRadius: '10px',
    paddingLeft: '5px',
    marginLeft: '5px',
  },

  button: {
    backgroundColor: 'blue',
    borderRadius: '10px',
    marginLeft: '5px',
  }
})

export default function NavBar() {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar>
        <Button className={classes.button}>Main Page</Button>
        <Button className={classes.button}>Favorites</Button>
        <InputBase placeholder="Search Movie Name" className={classes.searchBar} />
      </Toolbar>
    </AppBar>
  )
}