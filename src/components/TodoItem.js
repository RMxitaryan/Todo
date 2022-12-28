import React, { useState } from "react";
import Button from "@mui/material/Button";
import styles from "./Todo.module.css";
import DeleteDialog from "./DeleteDialog";
import EditDialog from "./EditDialog";

function TodoItem(props) {
  const [editedItem, seteditedItem] = useState(false);
  const [removeItem, setremoveItem] = useState(false);

  const openDeleteDialog = (e) => {
    e.stopPropagation();
    setremoveItem(true);
  };
  const onEdit = (e) => {
    e.stopPropagation();
    seteditedItem(true);
  };
  const handleDeleteItemClose = () => {
    setremoveItem(false);
  };
  const handleClose = () => {
    seteditedItem(false);
  };
  const {
    data: { id, value, completed },
    data,
    onCheckChange,
    onRemove,
    onSave,
  } = props;
  return (
    <div>
      <li
        className={`${completed ? styles.completedItem : ""}`}
        onClick={(e) => {
          onCheckChange(id);
        }}
      >
        {value}
        <Button
          variant="outlined"
          size="small"
          onClick={(e) => {
            onEdit(e);
          }}
        >
          edit
        </Button>
        <Button
          variant="outlined"
          size="small"
          onClick={(e) => {
            openDeleteDialog(e);
          }}
        >
          delete
        </Button>
      </li>

      {!!editedItem && (
        <EditDialog onClose={handleClose} onSave={onSave} data={data} />
      )}
      {!!removeItem && (
        <DeleteDialog
          onClose={handleDeleteItemClose}
          onRemove={onRemove}
          data={data}
        />
      )}
    </div>
  );
}

export default TodoItem;
