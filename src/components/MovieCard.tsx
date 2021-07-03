import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    margin: 10,
  }
})

interface MovieProps {
  title: string;
  year: string;
}

export default function MovieCard(props: MovieProps) {
  const classes = useStyles();
  return (
    <Card className={classes.root} >
      <CardContent>
        <p>{props.title}</p>
        <p>{props.year}</p>
      </CardContent>
      <CardActions>
        <Button>Favorite</Button>
      </CardActions>
    </Card>
  )
}