import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
function EditDialog(props) {
  const [editTextfieldValue, seteditTextfieldValue] = useState(
    props.data.value
  );
  const { onSave, data, onClose } = props;
  const onEditTextfieldChange = (event) => {
    seteditTextfieldValue(event.target.value);
  };
  const resetState = () => {
    seteditTextfieldValue("");
  };
  const handleClose = () => {
    resetState();
    onClose();
  };
  return (
    <Dialog open={true} onClose={handleClose}>
      <DialogTitle>Edit</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Todo"
          fullWidth
          variant="standard"
          value={editTextfieldValue}
          onChange={onEditTextfieldChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          disabled={!editTextfieldValue.trim()}
          onClick={() => {
            resetState();
            onSave(editTextfieldValue, data);
            onClose();
          }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditDialog;
