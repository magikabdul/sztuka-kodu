import React from 'react';
import { TableCell } from '@material-ui/core';

const Order = props => {
  const { title, description, createdAt } = props.note;

  return (
    <>
      <TableCell>{title}</TableCell>
      <TableCell>{description}</TableCell>
      <TableCell>{createdAt}</TableCell>
    </>
  );
};

export default Order;
