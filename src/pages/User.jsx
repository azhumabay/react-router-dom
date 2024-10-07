import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import users from "../const/users";
import { List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(useParams());

  const user = users.find((user) => user.id === parseInt(id, 10));

  return (
    <>
      <Button variant="outlined" onClick={() => navigate(-1)}>
        Вернуться назад
      </Button>
      <h1>{user.name}</h1>

      <List>
        {user.postList.map(({ id, title }) => (
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

export default User;
