import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import Header from '../layouts/Header';
import Title from './Title';

import { Button, Container, Paper, TextField } from '@material-ui/core';

import CancelIcon from '@material-ui/icons/Cancel';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles({
  root: {
    marginTop: 40
  },
  paper: {
    padding: 20
  },
  field: {
    marginTop: 20
  },
  buttons: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'space-between'
  },
  saveButton: {
    width: 140,
    backgroundColor: 'green',
    '&:hover': {
      backgroundColor: 'rgb(0, 102, 0)'
    }
  },
  cancelButton: {
    width: 140
  }
});

const NoteEditor = props => {
  const {
    title,
    changeTitle,
    description,
    changeDescription,
    clickAdd
  } = props;

  const classes = useStyles();

  return (
    <>
      <Header />
      <Container className={classes.root} maxWidth="sm">
        <Paper className={classes.paper}>
          <Title text="Create note" />
          <form>
            <TextField
              className={classes.field}
              label="Enter title"
              fullWidth
              required
              value={title}
              onChange={changeTitle}
            />
            <TextField
              className={classes.field}
              label="Description"
              fullWidth
              required
              variant="outlined"
              multiline
              rows={10}
              value={description}
              onChange={changeDescription}
            />
            <div className={classes.buttons}>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Button
                  className={classes.saveButton}
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<SaveIcon />}
                  onClick={clickAdd}
                >
                  save
                </Button>
              </Link>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Button
                  className={classes.cancelButton}
                  variant="contained"
                  color="secondary"
                  size="large"
                  startIcon={<CancelIcon />}
                >
                  cancel
                </Button>
              </Link>
            </div>
          </form>
        </Paper>
      </Container>
    </>
  );
};

export default NoteEditor;
