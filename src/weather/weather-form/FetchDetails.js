import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const CardData = ( props ) => {
   const { data } = props;
   const { main, name, wind, sys, weather } = data;
   const { speed } = wind;
   const { humidity, temp, temp_max, temp_min } = main;
   const { country } = sys;
   const  { description } = weather[0];
   // console.log(main, name, sys);
   return (
      <React.Fragment>
         <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                 {name} , {country}
            </Typography>
            <Typography variant="h5" component="div">
            {temp} °C
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
               {temp_min} &nbsp; | &nbsp; {temp_max}
            </Typography>
            <Typography variant="body2">
               Humidity:
               &nbsp;
               {humidity}
            </Typography>
            <Typography variant="body2">
               Wind Speed:
               &nbsp;
               {speed}
            </Typography>
         </CardContent>
         <CardActions style={{justifyContent:'center'}}>
            <Typography variant="h6">
               {description}
            </Typography>
            {/* <Button size="small">Learn More</Button> */}
         </CardActions>
      </React.Fragment>
   )
};

export const FetchDetails = (props) => {
   const { data } = props;
   console.log('fetchDetails',data)
   return (
      <>
         <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined"><CardData data={data} /></Card>
         </Box>   
      </>
   );
};


