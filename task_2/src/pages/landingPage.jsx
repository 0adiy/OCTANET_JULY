import React, { useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import RegisterDialog from "../components/registerDialog";

function LandingPage() {
  const [dialog, setDialog] = useState(true);
  return (
    <Container maxWidth='sm'>
      <Typography variant='h4' align='center' gutterBottom>
        Welcome to Todo List
      </Typography>
      <Typography variant='body1' align='center' gutterBottom>
        Keep track of your tasks and never forget anything again!
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button variant='contained' color='primary' style={{ marginRight: 8 }}>
          Register
        </Button>
        <Button variant='outlined' color='primary'>
          Login
        </Button>
      </div>
      {dialog ? <RegisterDialog setDialog={setDialog} /> : null}
    </Container>
  );
}

export default LandingPage;
