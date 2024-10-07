import { Link, Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { useAuth } from "../context/AuthProvider";

export default function AppLayout() {
  const { setAuth } = useAuth();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <AppBar position="static" sx={{ marginBottom: "50px" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Router DOM
          </Typography>
          <Button color="inherit" onClick={() => setAuth(false)}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <MenuItem
            component={Link}
            to="/"
            sx={{ padding: "20px", fontSize: "18px" }}
          >
            Home
          </MenuItem>
          <MenuItem
            component={Link}
            to="/about"
            sx={{ padding: "20px", fontSize: "18px" }}
          >
            About
          </MenuItem>
          <MenuItem
            component={Link}
            to="/user-list"
            sx={{ padding: "20px", fontSize: "18px" }}
          >
            User List
          </MenuItem>
        </Box>
      </Drawer>

      <Outlet />
    </>
  );
}
