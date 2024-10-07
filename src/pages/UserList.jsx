import React from "react";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person"; // Импорт иконки
import users from "../const/users";

const UserList = () => {
  return (
    <List>
      {users.map(({ id, name }) => (
        <ListItem
          key={id}
          component={Link}
          to={`/user/${id}/post-list`}
          sx={{ bgcolor: "lightgrey", marginBottom: 1, borderRadius: 1 }}
        >
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText sx={{ color: "black" }} primary={name} />
        </ListItem>
      ))}
    </List>
  );
};

export default UserList;
