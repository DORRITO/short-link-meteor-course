import {Meteor} from 'meteor/meteor';
import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
// import PropTypes from 'prop-types';

import Signup from '../ui/Signup';
import Link from '../ui/Link';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';

const history = createBrowserHistory({
  forceRefresh: true
});
const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];

///////////////authenticate page pushes/////////////
export const onAuthChange = (isAuthenticated) => {
  //location shows the url path '/name'
  const pathname = location.pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if (isUnauthenticatedPage && isAuthenticated) {
    history.replace('/links');
  } else if (isAuthenticatedPage && !isAuthenticated) {
    history.replace('/');
  }
  //if authenticated page, redirect to /links
    //browserHistory.push
  //if on authenticated and not logged in, redirect to /
    //browserHistory.push
  //no else
}//////////////////////////////////////////////

export const routes = (
  <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/links" component={Link}/>
        <Route path="*" component={NotFound}/>
      </Switch>
  </BrowserRouter>
  // <BrowserRouter><Link path="/links" /></BrowserRouter>
);
