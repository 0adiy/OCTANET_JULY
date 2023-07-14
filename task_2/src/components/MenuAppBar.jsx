import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import LoginDialog from "./loginDialog";
import RegisterDialog from "./registerDialog";
import { logout } from "../firebase";

function MyAppBar({ isLoggedIn, isDark, onThemeChange, user }) {
  //TODO - Add user email to UI
  return (
    <AppBar position='static' sx={{ bgcolor: isDark ? null : "#333" }}>
      <Toolbar>
        <Typography variant='body1'>{user?.email || "Todo App"}</Typography>
        <Box sx={{ flexGrow: 1 }} />
        {!isLoggedIn ? (
          <>
            <RegisterDialog />
            <LoginDialog />
          </>
        ) : (
          <Button color='inherit' onClick={logout}>
            Logout
          </Button>
        )}
        <IconButton
          edge='end'
          color='inherit'
          aria-label='mode'
          onClick={onThemeChange}
        >
          {isDark ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default MyAppBar;
