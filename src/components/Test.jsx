import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
import { Button } from '@material-ui/core';
//import { logout } from '../utility/auth1';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

class Test extends Component {
  state = {}
  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json));
    this.props.getByUrl('kk');
  }
  logout = ()=>{
    console.log('LLLLLLLLLLLLLLL');
    localStorage.removeItem('TOKEN_KEY');
    window.location.href = 'login';
  }
 
  render() {
    return (<div><Paper>
      <Typography variant="h5" component="h3">
        This is a sheet of paper.
            </Typography>
      <Typography component="p">
        Paper can be used to build surface or other elements for your application.
            </Typography>
    </Paper><Button onClick={this.logout}>LogOut</Button>
    </div>);
  }
}

const mapStateToProps = (state, ownProps) => ({
  cityName: ownProps.match.params[0],
});
const mapDispatchToProps = dispatch => ({
  getByUrl: (name) => { dispatch({ type: 'SIMPLE_ACTION', name }); },
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);