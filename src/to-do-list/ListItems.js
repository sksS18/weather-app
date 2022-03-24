import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
// import AlarmIcon from "@mui/icons-material/Alarm";
import { EditOff } from "@mui/icons-material";

export const ListItems = ({ list, onDelete, onEdit }) => {
   const { title, description, id } = list;
   // console.log('list', list);

   return (
      <>
         <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
         >
            <ListItem alignItems="flex-start">
               <ListItemAvatar>
                  <Avatar alt="Delete" src="/static/images/avatar/1.jpgg" />
               </ListItemAvatar>
               <ListItemText
                  // primary="Brunch this weekend?"
                  secondary={
                     <React.Fragment>
                        <Typography
                           sx={{ display: "inline" }}
                           component="span"
                           variant="body2"
                           color="text.primary"
                        >
                           {title}
                        </Typography>
                        <br />
                        {description}
                     </React.Fragment>
                  }
               />
               <ListItemAvatar>
                  <DeleteIcon onClick={() => onDelete(id)} />
               </ListItemAvatar>
               <ListItemAvatar>
                  <EditOff onClick={() => onEdit(id)} />
               </ListItemAvatar>
            </ListItem>
            <Divider variant="inset" component="li" />
         </List>
      </>
   );
};
