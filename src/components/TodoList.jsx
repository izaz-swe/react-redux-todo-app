// components/TodoList.js
import React from "react";
import { Grid } from "@mui/material";
import TodoCard from "./TodoCard"; // Import the TodoCard component

const TodoList = ({ todos, onDeleteTodo }) => {
  return (
    <Grid container spacing={2}>
      {todos.map((todo) => (
        <Grid item key={todo.id} xs>
          <TodoCard todo={todo} onDeleteTodo={onDeleteTodo} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TodoList;
