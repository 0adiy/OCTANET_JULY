import * as React from "react";
import {
  Card,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Tooltip,
  Fade,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/material";
import { Circle } from "@mui/icons-material";
import { red, yellow, green } from "@mui/material/colors";
import {
  collection,
  query,
  where,
  updateDoc,
  doc,
  getDocs,
  arrayRemove,
} from "firebase/firestore";
import { db } from "../firebase";

export default function Todo({ todo, user }) {
  let priorityColor;
  let priorityText;
  switch (todo.priority) {
    case 3:
      priorityColor = red[300];
      priorityText = "High";
      break;
    case 2:
      priorityColor = yellow[300];
      priorityText = "Medium";
      break;
    case 1:
      priorityColor = green[300];
      priorityText = "Low";
      break;
    default:
      priorityColor = red[800];
      priorityText = "error";
  }

  async function handleDelete() {
    const q = query(collection(db, "users"), where("uid", "==", user.uid));

    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const userDocRef = doc(collection(db, "users"), querySnapshot.docs[0].id);
      updateDoc(userDocRef, {
        todos: arrayRemove(todo),
      });
    } else {
      console.log("No user found with the given uid");
    }
  }

  return (
    <Card
      raised
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Tooltip
          title={priorityText}
          placement='left'
          arrow
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
        >
          <Circle sx={{ mr: 1, color: priorityColor }} />
        </Tooltip>
        <Typography variant='body1' color='text.secondary'>
          {todo.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Box sx={{ flexGrow: 1 }} />
        <Tooltip
          title='Delete'
          placement='right'
          arrow
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
        >
          <IconButton aria-label='delete' onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}
