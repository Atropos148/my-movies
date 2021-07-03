import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

export default function NavBar() {
  return (
    <AppBar>
      <Toolbar>
        <Button>Main Page</Button>
        <Button>Favorites</Button>
      </Toolbar>
    </AppBar>
  )
}