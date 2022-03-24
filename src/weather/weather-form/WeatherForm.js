import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { FetchDetails } from "weather/weather-form/FetchDetails";
const WeatherForm = () => {
   const [form, setForm] = React.useState();
   const [city, setCity] = React.useState("");
   const [country, setCountry] = React.useState("");

   const onSubmit = (evt) => {
      evt.preventDefault();
      // console.log(city, country, form);
      if (city && country) {
         callApi();
      } else {
         alert("Please enter valid city and country fields !");
      }
   };

   const callApi = () => {
      const fetchUrl = async () => {
         const response = await fetch(
            `${process.env.REACT_APP_API_URL}/weather?q=${city},${country}&appid=${process.env.REACT_APP_API_KEY}`,
            {
               "content-type": "application/json",
               type: "GET",
            }
         );
         const data = await response.json();
         console.log(`response => ${response} <=> ${data}`);
         let arr = [];
         arr.push(JSON.stringify(data));
         console.log(arr, "arr");
         setForm(JSON.parse(arr));
         // if (response.ok) {
         //    throw new Error(response.responseText);
         // }
      };

      fetchUrl();
   };
   return (
      <>
         <h2 variant="h2">Weather Form</h2>
         <Grid
            container
            style={{
               background: "#ddd",
               padding: 20,
               display: "flex",
               justifyContent: "center",
            }}
         >
            <Grid style={{
               marginRight: '3rem'
            }}>
               <Box
                  component="form"
                  onSubmit={onSubmit}
                  noValidate
                  autoComplete="off"
               >
                  <Grid>
                     <TextField
                        id="city-basic"
                        label="Enter City"
                        variant="outlined"
                        margin="normal"
                        onChange={(e) => setCity(e.target.value)}
                     />
                  </Grid>
                  <Grid>
                     <TextField
                        id="country-basic"
                        label="Enter Country"
                        variant="outlined"
                        margin="dense"
                        onChange={(e) => setCountry(e.target.value)}
                     />
                  </Grid>
                  <br />
                  <Grid>
                     <Button variant="contained" type="submit">
                        Submit
                     </Button>
                  </Grid>
               </Box>
            </Grid>

            {form && <FetchDetails data={form} />}
         </Grid>
         {/* <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" /> */}
      </>
   );
};

export default WeatherForm;
