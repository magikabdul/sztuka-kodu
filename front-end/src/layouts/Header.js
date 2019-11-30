import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import NoteAddIcon from '@material-ui/icons/NoteAdd';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  linksBar: {
    flexGrow: 1
  },
  appButton: {
    marginRight: theme.spacing(2)
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '1.2rem',
    fontWeight: 500
  },
  title: {
    display: 'inline',
    padding: '0 20px',
    '&:hover': {
      color: fade(theme.palette.common.white, 0.5)
    }
  },
  button: {
    textDecoration: 'none',
    color: 'white'
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.appButton}
            color="inherit"
            edge="start"
          >
            <NoteAddIcon />
          </IconButton>
          <div className={classes.linksBar}>
            <Link className={classes.link} to="/">
              <p variant="h6" className={classes.title}>
                Home
              </p>
            </Link>
            <Link className={classes.link} to="/add">
              <p variant="h6" className={classes.title}>
                Add Note
              </p>
            </Link>
          </div>
          <Link className={classes.link} to="/login">
            <Button style={{ color: 'white' }}>Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
