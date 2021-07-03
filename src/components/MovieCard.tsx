import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 150,
    margin: 10,
  },

  media: {
    height: 300,
  }
})

interface MovieProps {
  title: string;
  year: string;
  posterLink?: string;
}

export default function MovieCard(props: MovieProps) {
  const classes = useStyles();
  return (
    <Card className={classes.root} >
      <Grid container direction="row">
        <Grid item xs={6}>
          <CardMedia image={props.posterLink} className={classes.media} />
        </Grid>
        <Grid item xs={6}>
          <CardContent>
            <p>{props.title}</p>
            <p>{props.year}</p>
          </CardContent>
          <CardActions>
            <Button>Favorite</Button>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  )
}