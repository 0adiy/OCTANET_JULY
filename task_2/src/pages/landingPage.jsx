import React, { useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import RegisterDialog from "../components/registerDialog";
import LoginDialog from "../components/loginDialog";
import { onAuthStateChanged, getAuth } from "firebase/auth";

function LandingPage() {
  const [registerDialog, setRegisterDialog] = useState(false);
  const [loginDialog, setLoginDialog] = useState(false);

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setDialog(false);
    }
  });

  return (
    <Container maxWidth='sm'>
      <Typography variant='h4' align='center' gutterBottom>
        Welcome to Todo List
      </Typography>
      <Typography variant='body1' align='center' gutterBottom>
        Keep track of your tasks and never forget anything again!
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant='contained'
          color='primary'
          style={{ marginRight: 8 }}
          onClick={() => setRegisterDialog(true)}
        >
          Register
        </Button>
        <Button
          variant='outlined'
          color='primary'
          onClick={() => setLoginDialog(true)}
        >
          Login
        </Button>
      </div>
      <RegisterDialog setDialog={setRegisterDialog} open={registerDialog} />
      <LoginDialog setDialog={setLoginDialog} open={loginDialog} />
    </Container>
  );
}

export default LandingPage;
