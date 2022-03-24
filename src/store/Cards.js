import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

// import Item from "@mui/material/styles";

const Cards = (props) => {
   const { id, price, title, image, description, category, rating } = props;
   const { rate, count } = rating;
   // console.log('props', props);
   return (
      <Grid key={id} lg={3} sm={4} xs={6}>
         <Card sx={{ maxWidth: 345 }}>
            <CardMedia
               component="img"
               height="140"
               image={image}
               alt="green iguana"
            />
            <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                  {title}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                  {description}
               </Typography>
               <Typography variant="body1" color="text.primary">
                  {category}
               </Typography>
               <Typography variant="h6" color="text.primary">
                  {category}
               </Typography>
            </CardContent>
            <CardActions>
               <Button size="small">{rate}</Button>
               <Button size="small">{count}</Button>
            </CardActions>
         </Card>
      </Grid>
      );
};

export default Cards;