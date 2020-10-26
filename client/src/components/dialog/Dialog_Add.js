import React, { useState, useContext } from "react";

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";

import DialogTitle from "@material-ui/core/DialogTitle";
import { Context } from "../../context/globalStorage";

const Dialog_Add = ({ open, handleClose, setOpen, setOpenAlert }) => {
  const [judul, setJudul] = useState("");
  const [content, setContent] = useState("");
  const context = useContext(Context);

  const { postBlog } = context.blog;

  const handleAddNewPost = e => {
    e.preventDefault();
    const data = {
      judul,
      content,
    };
    postBlog(data, setOpen, setOpenAlert);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Add New Post</DialogTitle>
      <DialogContent className="dialog">
        <TextField
          className="input"
          autoFocus
          margin="dense"
          id="judul"
          label="Judul"
          type="text"
          value={judul}
          onChange={e => setJudul(e.target.value)}
          fullWidth
        />
        <TextField
          autoFocus
          className="input"
          margin="dense"
          id="name"
          label="Content"
          type="text"
          value={content}
          onChange={e => setContent(e.target.value)}
          fullWidth
          multiline
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleAddNewPost} color="primary">
          Add New Post
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Dialog_Add;
