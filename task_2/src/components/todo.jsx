import * as React from "react";
import {
  Card,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/material";

export default function Todo({ todo }) {
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
      <CardContent>
        <Typography variant='body1' color='text.secondary'>
          {todo.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton aria-label='delete'>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
