// components/TodoCard.js
import React, { useState } from "react";
import {
    Card,
    CardContent,
    Typography,
    IconButton
} from "@mui/material";

import {
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Button,
} from "@mui/material";
import { Delete, Edit, ExpandLess, ExpandMore } from "@mui/icons-material";


const TodoCard = ({ todo, onDeleteTodo, onEditTodo }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);

    const handleToggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };
    const [open, setOpen] = useState(false);
    const [newTodo, setNewTodo] = useState({ ...todo });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        onEditTodo(newTodo);
        handleClose();
    };
    return (
        <>
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
                            {showFullDescription ? <ExpandLess /> : <ExpandMore />}
                        </IconButton>
                    )}
                    <IconButton
                        edge="end"
                        aria-label="edit"
                        onClick={handleClickOpen}
                    >
                        <Edit />
                    </IconButton>
                    <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => onDeleteTodo(todo.id)}
                    >
                        <Delete />
                    </IconButton>
                </CardContent>
            </Card>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Edit Todo</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Title"
                        type="text"
                        fullWidth
                        value={newTodo.title}
                        onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
                    />
                    <TextField
                        margin="dense"
                        id="description"
                        label="Description"
                        type="text"
                        fullWidth
                        multiline
                        rows={4}
                        value={newTodo.description}
                        onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSave} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default TodoCard;
