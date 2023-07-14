import React, { useEffect, useState } from "react";
import { Container, Typography, List, ListItem } from "@mui/material";
import Todo from "../components/todo";
import { collection, onSnapshot, where, query } from "firebase/firestore";
import { db } from "../firebase.jsx";
import AddTodoButton from "../components/addTodoButton";

function TodoListPage({ user }) {
  const [todosArr, setTodosArr] = useState([]);
  useEffect(() => {
    console.log("user_uid: ", user.uid);
    const userDocRef = query(
      collection(db, "users"),
      where("uid", "==", user.uid)
    );
    const unsubscribe = onSnapshot(userDocRef, (querySnapshot) => {
      const todos = [];
      querySnapshot.forEach((doc) => {
        todos.push(...doc.data().todos);
      });
      console.log("todos: ", todos);
      setTodosArr(todos);
    });

    //TODO - Add Sorting option

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Container maxWidth='md' sx={{ minHeight: "80vh" }}>
      <Typography variant='h4' align='center' gutterBottom>
        <List
          sx={{
            overflow: "auto",
            height: "80vh",
            "&::-webkit-scrollbar": { display: "none" },
            "-ms-overflow-style": "none",
            scrollbarWidth: "none",
          }}
        >
          {todosArr.map((todo, index) => (
            <ListItem key={index}>
              <Todo todo={todo} user={user} />
            </ListItem>
          ))}
        </List>
        <AddTodoButton user={user} />
      </Typography>
    </Container>
  );
}

export default TodoListPage;
