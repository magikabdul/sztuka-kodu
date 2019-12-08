import React from 'react';

import Notes from '../pages/Notes';

import { makeStyles } from '@material-ui/core/styles';

import Header from './Header';
import { Container, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 30
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column'
  }
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Container className={classes.root} maxWidth="md">
        <div>
          <Paper className={classes.paper}>
            <Notes />
          </Paper>
        </div>
      </Container>
    </>
  );
};

export default HomePage;
