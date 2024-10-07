import { List, ListItem, ListItemText } from "@mui/material";
import users from "../const/users";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";

const AuthUserPostList = () => {
  const { login } = useAuth();
  const user = users.find((user) => user.login == login);
  const userPosts = user.postList;

  console.log(userPosts, login);

  return (
    <>
      <h1>{user.name}</h1>
      <List>
        {userPosts.map(({ id, title }) => (
          <ListItem
            key={id}
            component={Link}
            to={`/user/${user.id}/post/${id}`}
            sx={{ bgcolor: "lightgrey", marginBottom: 1, borderRadius: 1 }}
          >
            <ListItemText sx={{ color: "black" }} primary={title} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default AuthUserPostList;
