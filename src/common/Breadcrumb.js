import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";

export const Breadcrumb = (params) => {
   return (
      <Grid container spacing={2}>
         <Grid item gutter="standered" xs={6} md={8}>
            <Breadcrumbs aria-label="breadcrumb">
               <Link underline="hover" color="inherit" to="/">
                  Home
               </Link>
            </Breadcrumbs>
         </Grid>
      </Grid>
   );
};
