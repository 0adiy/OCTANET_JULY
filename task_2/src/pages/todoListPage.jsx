import React, { useEffect } from "react";
import { Container, Typography } from "@mui/material";
import Todo from "../components/todo";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase.jsx";

function TodoListPage() {
  // useEffect(() => {
  //   onSnapshot(q, (snapshot) => {
  //     setTodos(
  //       snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         item: doc.data(),
  //       }))
  //     );
  //   });
  // }, [input]);
  useEffect(() => {
    const usersref = collection(db, "users");
    const todo = onSnapshot(usersref, (snapshot) => {
      console.log("length: ", snapshot.docs.length);
      snapshot.docs.forEach((doc) => {
        console.table(doc.data());
      });
    });
  }, []);
  return (
    <Container maxWidth='sm'>
      <Typography variant='h4' align='center' gutterBottom>
        Welcome to Todo List
      </Typography>
      <Typography variant='body1' align='center' gutterBottom>
        Keep track of your tasks and never forget anything again!
      </Typography>
    </Container>
  );
}

export default TodoListPage;
