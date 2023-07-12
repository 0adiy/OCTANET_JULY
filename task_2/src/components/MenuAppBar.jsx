import React, { useEffect } from "react";
import { AppBar, Toolbar, Button, IconButton, Box } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import LoginDialog from "./loginDialog";
import RegisterDialog from "./registerDialog";
import { logout } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const MyAppBar = ({
  setisLoggedIn,
  isLoggedIn,
  isDark,
  onThemeChange,
  setUser,
}) => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        console.log(user);
        setisLoggedIn(true);
        setUser(user);
      } else setisLoggedIn(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AppBar position='static' sx={{ bgcolor: isDark ? null : "#333" }}>
      <Toolbar>
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
};

export default MyAppBar;
