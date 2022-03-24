import React, { useEffect, useState} from 'react';
import MediaCard from './MediaCard';
// import TabPanel from './TabPanel';

const Weather = () => {
   const [lat, setLat] = useState([]);
   const [long, setLong] = useState([]);
   const [data, setData] = useState([]);

   useEffect (() => {

      const fetchData  = async(lat, long) => {

         navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);

            console.log("Latitude is:", lat)
            console.log("Longitude is:", long)
         });

         // console.log('long-lant', lat, long)
         const newLat = 28.573696,
               newLong = 77.3849088,
               REACT_APP_API_KEY = '6355b8c4aeaf0c9016295676e3f7265b';

         console.log(newLat, newLong, 'apiKey =>', REACT_APP_API_KEY);
         
         await fetch(`api.openweathermap.org/data/2.5/weather?lat=${newLat}&lon=${newLong}&appid=${REACT_APP_API_KEY}`)
            .then(res => res.json())
            .then(result => {
               console.log(result);
               setData(result)
            });
   
         // try{
         //    // fetch(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${REACT_APP_API_KEY}`)
         //    // const response = await fetch(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=6355b8c4aeaf0c9016295676e3f7265b`);
         //    const response = await fetch(
         //       `
         //    ${process.env.REACT_APP_API_URL}
         //    /weather?lat=${lat}&lon=${long}
         //    &appid=${process.env.REACT_APP_API_KEY}`,
         //       {
         //          method: "GET",
         //       }
         //    );
         //    console.log('response', response);
         //    const data = await response.json();
         //    const { result } = data;
         //    console.log('data', result);
         //    setData(result)
   
         //    if(!response.ok) {
         //       throw new Error(response.statusText);
         //    }
   
         //    //  .then((response) => {
         //    //     response.json()
         //    //     console.log('response', response);
         //    //  })
         //    //  .then(data => console.log('data', data), setData(data))
   
         // } catch(error) {
         //    console.log('error', error)
         // }            
      }

      fetchData();
   },[lat, long])


   

   return (
      <>
         <h2 style={{color: 'black'}}>Weather Report</h2>
         {/* <TabPanel /> */}
         <MediaCard lat={lat} long={long} />
         {data}
      </>
   )
}

export default Weather;