import React, { useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import RegisterDialog from "../components/registerDialog";
import LoginDialog from "../components/loginDialog";
import { onAuthStateChanged, getAuth } from "firebase/auth";

function LandingPage() {
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
        <RegisterDialog />
        <LoginDialog />
      </div>
    </Container>
  );
}

export default LandingPage;
