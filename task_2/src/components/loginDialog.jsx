import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  List,
  ListItem,
} from "@mui/material";
import { loginWithEmailAndPassword } from "../firebase.jsx";

function LoginDialog() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [open, setOpen] = useState(false);
  const handleLogin = () => {
    loginWithEmailAndPassword(email, password);
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant='outlined' color='primary' onClick={() => setOpen(true)}>
        Login
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <List>
            <ListItem>
              <TextField
                id='email'
                label='Email'
                type='email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </ListItem>
            <ListItem>
              <TextField
                id='password'
                label='Password'
                type='password'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' color='primary' onClick={handleLogin}>
            Login
          </Button>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default LoginDialog;
