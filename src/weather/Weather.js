import React, { useEffect, useState } from "react";
import MediaCard from "./MediaCard";
import axios from "axios";
import { Box, CircularProgress, Grid } from "@mui/material";
// import TabPanel from './TabPanel';

const Weather = () => {
   const [lat, setLat] = useState("");
   const [long, setLong] = useState("");
   const [data, setData] = useState([]);

   useEffect(() => {
      navigator.geolocation.getCurrentPosition(function (position) {
         setLat(position.coords.latitude);
         setLong(position.coords.longitude);
      });
   }, []);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(
               `${process.env.REACT_APP_API_URL}/weather?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_KEY}`
            );
            // const data = await response.json();
            const { data } = await response;
            // setData(data.push(data));
            let arr = [];
            arr.push(data);
            setData(arr);
            // console.log('result =>', data);

            if (!response.ok) {
               throw new Error(response.statusText);
            }
         } catch (error) {
            console.log(`${error}`);
         }
      };
      // setData([
      //    {"coord":{"lon":77.3849,"lat":28.5704},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"stations","main":{"temp":300.33,"feels_like":299.27,"temp_min":300.33,"temp_max":300.33,"pressure":1009,"humidity":17,"sea_level":1009,"grnd_level":987},"visibility":10000,"wind":{"speed":2.76,"deg":283,"gust":4.16},"clouds":{"all":0},"dt":1647002117,"sys":{"type":1,"id":9165,"country":"IN","sunrise":1646960713,"sunset":1647003369},"timezone":19800,"id":7279602,"name":"Gautam Budh Nagar","cod":200}
      // ])
      if (lat && long) {
         fetchData();
      }
   }, [lat, long]);

   return (
      <>
         <h2 style={{ color: "black" }}>Weather Report</h2>
         {/* {console.log('responseData =>',data)} */}
         <Grid 
            style={{
               display: 'flex',
               justifyContent: 'center'
            }}
         >
         
               {!data.length && (
                  <Box sx={{ display: "flex" }}>
                     <CircularProgress />
                  </Box>
               )}
               {data.length > 0 && <MediaCard lat={lat} long={long} data={data} />}
         </Grid>
      </>
   );
};

export default Weather;
