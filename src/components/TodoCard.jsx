// components/TodoCard.js
import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton
} from "@mui/material";
import { Delete, ExpandLess, ExpandMore } from "@mui/icons-material";


const TodoCard = ({ todo, onDeleteTodo }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleToggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <Card sx={{
        transition: "transform 0.3s",
        cursor: "pointer",
        "&:hover": {
          boxShadow: `0 0 10px 3px blue`,
          transform: "scale(1.02)",
        },
      }}>
      <CardContent>
        <Typography variant="h6" component="h2">
          {todo.title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          style={{
            whiteSpace: "normal",
            maxHeight: showFullDescription ? "none" : "3em",
            overflow: "hidden",
            justifyContent: "stretch",
          }}
        >
          {todo.description}
        </Typography>
        {todo.description.length > 100 && (
          <IconButton onClick={handleToggleDescription}>
            {showFullDescription ? <ExpandLess/> : <ExpandMore />}
          </IconButton>
        )}
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => onDeleteTodo(todo.id)}
        >
          <Delete />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default TodoCard;
