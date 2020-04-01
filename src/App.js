import React, { Component } from "react";
import Register from "./components/register";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Video from "./components/video";
import Header from "./components/header";
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

const history = createBrowserHistory();

history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

const trackingId = "UA-162249992-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
ReactGA.set({
  userId: {localStorage}
  // any data that is relevant to the user session
  // that you would like to track with google analytics
})


const isLoggedIn = () => {
  return localStorage.getItem("TOKEN_KEY") != null;
};

// Protected Route
const SecuredRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      // ternary condition

      isLoggedIn() === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);
export default class App extends Component {
  componentWillUpdate(nextProps, nextState) {
    console.log("update");
  }


  render() {
    // const {pathname} = this.props.location;
    return (
      <Router history={history}>
        <Switch>
          <div>
          {isLoggedIn() && <Header />}
            <Route path="/register" component={Register} />
            <Route path="/login/:notify?" component={Login} />
            <SecuredRoute path="/dashboard" component={Dashboard} />
            <SecuredRoute path="/" exact component={Dashboard} />
            <SecuredRoute path="/tv/:id" component={Video} />

          </div>
        </Switch>
      </Router>
    );
  }
}