import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from "react-redux";
import _ from 'lodash';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import auth from '../utility/auth';
import { login } from '../utility/auth1';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';


import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import LinearProgress from '@material-ui/core/LinearProgress';
import Model from '../utility/Model';


import '../utility/style.css';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  snackBar: {
    backgroundColor: '#43a047'
  },
  linear: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const LogIn = (props) => {
  const [snack, setSnack] = React.useState({
    snackState: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const snackBarClose = () => {
    setSnack({ ...snack, open: false });
  };

  const { vertical, horizontal, open } = snack;

  const classes = useStyles();

  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');
  const dispatch = useDispatch();
  const loginResult = useSelector(state => _.get(state.loginReducer, 'result.data', {}));
  if (!_.isEmpty(loginResult)) {
    login();
    props.history.push('/dashboard');
    //  return <Redirect to="/test" />;
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt);
    setSnack({ open: true, vertical: 'bottom', horizontal: 'center' });
    dispatch({ type: 'LOGIN_ACTION', payload: { username: user, password: password } });
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <div className={classes.linear}>
      <LinearProgress />
    </div>
        <div className={classes.paper}>
        
            {/* <Model
          content={<div className={1 > 1 ? '' : 'mainDivProgress'} id="progress">
          <CircularProgress
            classes={{
              root: 'progress-default',
            }}
          />
        </div>}
          modalProps={{
            clickOutToClose: true,
            progress: true,
            blurBg: true,
          }}
          open={false}
        /> */}
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              helperText=""
              error={false}
              autoFocus
              onChange={e => setUser(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={e => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/test" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
          
        </div>
        <Snackbar
          classes={{ root: 'snack-bar-succ' }}
          anchorOrigin={{ vertical, horizontal }}
          key={`${vertical},${horizontal}`}
          open={open}
          autoHideDuration={2000}
          onClose={snackBarClose}
        >
          <SnackbarContent
            action={[
              <CloseIcon
                className="snack-bar-close-icon"
                key="closeIcon"
                onClick={snackBarClose}
              />,
            ]}
            message="Success"
            className={classes.snackBar} />
        </Snackbar>
      </Grid>
    </Grid>

  );
}
export default LogIn;