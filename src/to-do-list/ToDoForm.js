import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export const ToDoForm = (params) => {
   const {
      title,
      description,
      onTitleChange,
      onDescriptionChange,
      onSubmit,
      editTable,
      onUpdate,
   } = params;
   // console.log('titleChange', params);
   return (
      <>
         <Box
            component="form"
            sx={{
               "& > :not(style)": { m: 1, width: "25ch" },
            }}
            onSubmit={editTable ? onUpdate : onSubmit}
            noValidate
            autoComplete="off"
         >
            <TextField
               id="Title-basic"
               label="Title"
               variant="standard"
               onChange={onTitleChange}
               value={title}
            />
            <TextField
               id="details-basic"
               label="Details"
               variant="standard"
               onChange={onDescriptionChange}
               value={description}
            />
            {editTable && (
               <Button
                  type="submit"
                  variant="contained"
                  // onClick={onSubmit}
               >
                  Update
               </Button>
            )}
            {!editTable && (
               <Button
                  type="submit"
                  variant="contained"
                  // onClick={onSubmit}
               >
                  Submit
               </Button>
            )}
         </Box>
      </>
   );
};
