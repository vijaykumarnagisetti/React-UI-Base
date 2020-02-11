import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Test from "../components/Test";
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import LogIn from '../components/LogIn';
import ResponsiveDrawer from '../components/ResponsiveDrawer';
import Dashboard from '../components/dashboard/Dashboard';
import auth from './auth';
import { isLogin } from './auth1';
import  AuthExample  from '../components/AuthExample';


const PrivateRoute = ({ component: Component, authed, ...rest }) => (
    <Route
      {...rest}
      render={props => (
        isLogin()
          ? <Component {...props} />
          : <Redirect to="/login" />
      )}
    />
  );

class Routes extends Component {
  componentDidMount() {
    console.log('==== Routes mounted!=====');
  }

  render() {
    console.log('Routes props', auth.isAuthenticated());
    return (
        <BrowserRouter>
            <div>
                {/* <Switch> */}
                    <Route exact path="/" component={LogIn} />
                    <PrivateRoute path="/test" component={Test} />
                    <PrivateRoute path="/dashboard" component={Dashboard} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/register" component={SignUp} />
                    <Route path="/login" component={LogIn} />
                    <Route path="/sidebar" component={ResponsiveDrawer} />
                    <Route path="/auth" component={AuthExample} />

                    {/* </Switch> */}
        </div>
      </BrowserRouter>
    );
  }
}
export default Routes;