import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const ListBox = (props) => {

  const { list }  = props;
  const { main, name  } = list[0];
  const { temp, temp_min, temp_max, humidity } = main;
  console.log(name, '<=props')

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              </ListItemIcon>
              Temp:
              <ListItemText primary={temp} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              </ListItemIcon>
              Min Temp:
              <ListItemText primary={temp_min} />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              Max Temp:
              <ListItemText primary={temp_max} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              Humidity:
              <ListItemText primary={humidity} />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}

export default function MediaCard(props) {
   const { data } = props;
  //  const { name } = data;
   const {coord, name } = data[0];
   const {lat, lon} = coord;
  //  console.log(data)
   console.log('props', props);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://cdn.s3waas.gov.in/s30aa1883c6411f7873cb83dacb17b0afc/uploads/2018/02/2018021513.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="h6" component="span">
          Lat: {lat}
        </Typography>
        <Typography gutterBottom variant="h6" component="span">
          Log: {lon}
        </Typography>
        <ListBox list={data} />
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}