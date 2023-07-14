import React, { useState } from "react";
import { Button, Container, Link, Typography } from "@mui/material";
import RegisterDialog from "../components/registerDialog";
import LoginDialog from "../components/loginDialog";
import { onAuthStateChanged, getAuth } from "firebase/auth";

function LandingPage() {
  return (
    <Container
      maxWidth='sm'
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
      }}
    >
      <Typography variant='h4' align='center' gutterBottom>
        Welcome to Todo List
      </Typography>
      <Typography variant='body1' align='center' gutterBottom>
        Keep track of your tasks and never forget anything again!
      </Typography>
      <Typography variant='body2' align='center' gutterBottom>
        This project is created with vite+React and Firebase by{" "}
        <Link href='https://github.com/0adiy'>Aditya Yadav</Link>.
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <RegisterDialog />
        <LoginDialog />
      </div>
    </Container>
  );
}

export default LandingPage;
