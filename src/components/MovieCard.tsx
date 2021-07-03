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

interface MovieProps {
  name: string;
  year: number;
}

export default function MovieCard(props: MovieProps) {
  const classes = useStyles();
  return (
    <Card className={classes.root} >
      <CardContent>
        <p>{props.name}</p>
        <p>{props.year}</p>
      </CardContent>
      <CardActions>
        <Button>Favorite</Button>
      </CardActions>
    </Card>
  )
}