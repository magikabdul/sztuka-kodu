import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import { TableCell, Fab } from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import NoteEditor from "../components/NoteEditor";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  iconCell: {
    display: "flex",
    justifyContent: "flex-end"
  }
}));

const Note = props => {
  const { id, title, description, createdAt } = props.note;

  const showEditor = false;

  const classes = useStyles();

  return (
    <>
      <TableCell>{title}</TableCell>
      <TableCell>{description}</TableCell>
      <TableCell>{createdAt}</TableCell>
      <TableCell className={classes.iconCell}>
        {/* <Link to="/edit" id={id}> */}
        <Fab
          size="small"
          color="primary"
          className={classes.margin}
          // onClick={() => props.update(props.note.id)}
          onClick={() => !showEditor}
        >
          <EditIcon />
        </Fab>
        {/* </Link> */}

        <Fab
          size="small"
          color="secondary"
          className={classes.margin}
          onClick={() => props.delete(props.note.id)}
        >
          <DeleteIcon />
        </Fab>
      </TableCell>
    </>
  );
};

export default Note;
