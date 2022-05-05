import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputAdornment,
  TextField,
} from "@mui/material";
import Link from "@mui/icons-material/Link";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";
import React, { useState } from "react";

const AddSong = () => {
  const [dialog, setDialog] = useState(false);
  const handleCloseDialog = () => {
    setDialog(false);
  };

  return (
    <div style={{ display: "flex", alignItems: "flex-end" }}>
      <Dialog
        onClose={handleCloseDialog}
        open={dialog}
        sx={{ textAlign: "center" }}
      >
        <DialogTitle>Edit Song</DialogTitle>
        <DialogContent>
          <img
            src="/music2.svg"
            alt="song thumbnail"
            style={{ width: "200px" }}
          />
          <TextField
            variant="standard"
            name="title"
            label="Title"
            fullWidth
            margin="dense"
          />
          <TextField
            variant="standard"
            name="artist"
            label="Artist"
            fullWidth
            margin="dense"
          />
          <TextField
            variant="standard"
            name="thumbnail"
            label="Thumbnail"
            fullWidth
            margin="dense"
          />
        </DialogContent>
        <DialogActions sx={{ margin: 2 }}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleCloseDialog}
          >
            Cancel
          </Button>
          <Button variant="contained">Add Song</Button>
        </DialogActions>
      </Dialog>
      <TextField
        variant="standard"
        sx={{ margin: 1 }}
        placeholder="Add Youtube or SoundCloud Url"
        fullWidth
        margin="normal"
        type="url"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Link />
            </InputAdornment>
          ),
        }}
      />

      <AddCircleTwoToneIcon
        style={{ cursor: "pointer" }}
        onClick={() => {
          setDialog(true);
        }}
      />
    </div>
  );
};

export default AddSong;
