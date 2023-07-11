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
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { registerWithEmailAndPassword } from "../firebase.jsx";

function RegisterDialog({ setDialog }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setDialog(false);
    }
  });
  const handleRegister = () => {
    registerWithEmailAndPassword(email, password);
  };

  const handleClose = () => {
    setDialog(false);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Register</DialogTitle>
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
        <Button variant='contained' color='primary' onClick={handleRegister}>
          Register
        </Button>
        <Button onClick={handleClose} color='primary'>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default RegisterDialog;
