import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const ErrorPage = () => {
  const navigate = useNavigate();

  const backToHomePage = () => {
    navigate("/");
  };

  return (
    <>
      <h1>Page Not Found</h1>
      <Button variant="contained" onClick={backToHomePage}>
        Вернуться на главную страницу
      </Button>
    </>
  );
};

export default ErrorPage;
