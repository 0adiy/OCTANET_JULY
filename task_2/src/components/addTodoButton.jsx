import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  FormControl,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {
  collection,
  query,
  where,
  updateDoc,
  arrayUnion,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase";

export default function AddTodoButton({ user }) {
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");

  const handleClose = () => {
    setOpen(false);
    setTask("");
    setPriority("");
  };

  const handleAddTodo = async () => {
    const newTodo = { text: task, priority, completed: false };
    const q = query(collection(db, "users"), where("uid", "==", user.uid));

    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const userDocRef = doc(collection(db, "users"), querySnapshot.docs[0].id);
      updateDoc(userDocRef, {
        todos: arrayUnion(newTodo),
      });
      handleClose();
    } else {
      console.log("No user found with the given uid");
    }
  };

  return (
    <>
      <Fab
        aria-label='add'
        color='primary'
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        onClick={() => setOpen(true)}
      >
        <AddIcon />
      </Fab>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Todo</DialogTitle>
        <DialogContent>
          <List>
            <ListItem>
              <TextField
                label='Text'
                value={task}
                onChange={(event) => setTask(event.target.value)}
                fullWidth
                required
                error={task.length === 0}
              />
            </ListItem>
            <ListItem>
              <FormControl fullWidth required error={priority.length === 0}>
                <InputLabel id='priority'>Priority</InputLabel>
                <Select
                  labelId='priority'
                  id='priority-select'
                  value={priority}
                  label='Priority'
                  onChange={(event) => setPriority(event.target.value)}
                >
                  <MenuItem value=''>None</MenuItem>
                  <MenuItem value={3}>High</MenuItem>
                  <MenuItem value={2}>Medium</MenuItem>
                  <MenuItem value={1}>Low</MenuItem>
                </Select>
              </FormControl>
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddTodo}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
