import { useLocation, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const fromPage = location.state?.from?.pathname || "/";

  return (
    <>
      <h1>LoginPage</h1>
      <input type="text" placeholder="login" />
      <input type="text" placeholder="password" />
      <button>Авторизоваться</button>
      {fromPage}
    </>
  );
};

export default LoginPage;
