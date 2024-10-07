import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { useEffect, useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

const LoginPage = () => {
  const [inputLogin, setInputLogin] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const fromPage = location.state?.from?.pathname || "/";

  const { auth, setPassword, setLogin } = useAuth();

  const checkUser = () => {
    setLogin(inputLogin);
    setPassword(inputPassword);
  };

  useEffect(() => {
    if (auth) {
      navigate(fromPage);
    }
  }, [auth, navigate, fromPage]);

  return (
    <>
      <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid xs={12} md={6}>
          <Box
            sx={{
              padding: 4,
              border: "1px solid #e0e0e0",
              borderRadius: 2,
              boxShadow: 3,
              backgroundColor: "white",
              textAlign: "center",
            }}
          >
            <Typography variant="h4" component="h1" gutterBottom>
              Login Page
            </Typography>
            <TextField
              label="Login"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={(e) => setInputLogin(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              onChange={(e) => setInputPassword(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ marginTop: 2 }}
              onClick={checkUser}
            >
              Авторизоваться
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginPage;
