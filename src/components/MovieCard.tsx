import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
  }
})

export default function MovieCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root} >
      <CardContent>
        <p>Movie Name</p>
        <p>Release Year</p>
      </CardContent>
      <CardActions>
        <Button>Favorite</Button>
      </CardActions>
    </Card>
  )
}