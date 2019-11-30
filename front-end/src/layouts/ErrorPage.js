import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/ErrorPage.scss';

import Container from '@material-ui/core/Container';

import BugReportIcon from '@material-ui/icons/BugReport';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';

const ErrorPage = () => {
  return (
    <Container maxWidth="md">
      <div className="error-page">
        <div style={{ display: 'flex' }}>
          <BugReportIcon
            style={{ fontSize: 150 }}
            className="error-page__icon"
          />
          <p className="error-page__code">404</p>
        </div>
        <h3 className="error-page__header">Page not found</h3>
        <p className="error-page__message">
          We're sorry, the page you requested could not be found. Please go back
          to homepage.
        </p>
        <Link to="/">
          <Button
            style={{ marginTop: 20, paddingLeft: 50, paddingRight: 50 }}
            variant="contained"
            color="primary"
            size="large"
            startIcon={<HomeIcon />}
            // onClick={<Link to="/" />}
          >
            home
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default ErrorPage;
