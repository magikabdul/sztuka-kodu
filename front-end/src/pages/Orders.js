import React, { Component } from 'react';

import Title from '../components/Title';

import Order from '../components/Order';
import {
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody
} from '@material-ui/core';

class Orders extends Component {
  state = {
    notes: []
  };

  componentDidMount() {
    fetch('http://localhost:8080//api/tasks')
      .then(response => response.json())
      .then(notes => this.setState({ notes }));
  }

  render() {
    const orderList = this.state.notes.map(note => (
      <TableRow key={note.id}>
        <Order note={note} />
      </TableRow>
    ));

    return (
      <>
        <Title text={'List of Notes'} />
        <Table style={{ width: '95%' }}>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Created at</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{orderList}</TableBody>
        </Table>
      </>
    );
  }
}

export default Orders;
