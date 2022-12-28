import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
function DeleteDialog(props) {
  const { onRemove, onClose, data } = props;
  return (
    <Dialog open={true} onClose={onClose}>
      <DialogTitle>Delete</DialogTitle>
      <DialogContent>
        <span>{`Are you sure you want to Delete ${data.value} ?`}</span>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>No</Button>
        <Button
          onClick={() => {
            onRemove(data);
          }}
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteDialog;
