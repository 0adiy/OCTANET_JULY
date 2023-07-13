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

export default function Todo({ todo }) {
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
          <IconButton aria-label='delete'>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}
