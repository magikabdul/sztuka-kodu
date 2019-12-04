import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { TableCell, Fab } from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  iconCell: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));

const Order = props => {
  const { title, description, createdAt } = props.note;

  const classes = useStyles();

  return (
    <>
      <TableCell>{title}</TableCell>
      <TableCell>{description}</TableCell>
      <TableCell>{createdAt}</TableCell>
      <TableCell className={classes.iconCell}>
        <Fab size="small" color="primary" className={classes.margin}>
          <EditIcon />
        </Fab>

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

export default Order;
