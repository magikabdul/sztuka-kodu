import React, { Component } from 'react';

import '../styles/App.scss';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import HomePage from '../layouts/HomePage';
import AddNotePage from '../layouts/AddNotePage';
import RegisterPage from '../layouts/RegisterPage';
import LoginPage from '../layouts/LoginPage';
import ErrorPage from '../layouts/ErrorPage';

class App extends Component {
  state = {
    isLogin: false
  };
  render() {
    return (
      <>
        <CssBaseline />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/add" component={AddNotePage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/login" component={LoginPage} />
            <Route component={ErrorPage} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
