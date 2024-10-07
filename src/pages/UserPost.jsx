import { Button } from "@mui/material";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import users from "../const/users";

const UserPost = () => {
  const { userId, postId } = useParams();
  const navigate = useNavigate();
  console.log(useParams());

  const user = users.find((user) => user.id === parseInt(userId, 10));
  const userPost = user.postList.find(
    (post) => post.id === parseInt(postId, 10)
  );

  return (
    <>
      <Button variant="outlined" onClick={() => navigate(-1)}>
        Вернуться назад
      </Button>
      <h1>{userPost.title}</h1>
      <div>{userPost.description}</div>
    </>
  );
};

export default UserPost;
