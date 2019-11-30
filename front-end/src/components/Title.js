import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  text: {
    color: '#1976d2',
    marginBottom: '0.9rem',
    fontWeight: 500,
    lineHeight: 1.6,
    letterSpacing: '0.05rem'
  }
}));

const Title = props => {
  const classes = useStyles();

  return (
    <>
      <h2 className={classes.text}>{props.text}</h2>
    </>
  );
};

export default Title;
