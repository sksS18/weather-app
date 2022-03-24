// import { createMuiTheme } from '@mui/material';
import FiraCode from "assets/fonts/FiraCode-Regular.ttf";

import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
   typography: {
      fontFamily: '"Fira Code", sans-serif',
   },
   overrides: {
      MuiCssBaseline: {
         "@global": {
            "@font-face": [FiraCode],
         },
      },
   },
});

export default theme;
