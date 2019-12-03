import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import api from '../apis/api';

import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import SettingsIcon from '@material-ui/icons/Settings';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import { Link } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'


const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: 'none',
    color: 'blue'
  },
  mainlink: {
    textDecoration: 'none', 
    color: 'white'
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

function HeaderMenu() {
  
  const store = useSelector(store => store.authOptions);
  const dispatch = useDispatch();
  
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [goToIndex, setGoToIndex] = useState(true);
  const [goToMain, setGoToMain] = useState(false);
  const [goToProfile, setGoToProfile] = useState(false);
  const [goToHistory, setGoToHistory] = useState(false);


  // Sign In and Sign Up controllers
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    dispatch({type: 'LOGGED_IN'});
  }, [dispatch, goToIndex, goToMain, goToProfile, goToHistory, anchorEl, mobileMoreAnchorEl]);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const logOut = event => {
    event.preventDefault();
    localStorage.clear();
    dispatch({type: 'LOGGED_IN'});
    setGoToIndex(true);
    setGoToMain(false);
    setGoToHistory(false);
    setGoToProfile(false);
    setAnchorEl(null);
    setMobileMoreAnchorEl(null);
  }

  const handleLoginOpen = () => {
    setOpenLogin(true);
  };

  const handleLoginClose = () => {
    setOpenLogin(false);
  };

  const handleSignupOpen = () => {
    setOpenSignup(true);
  };

  const handleSignupClose = () => {
    setOpenSignup(false);
  };

  const logIntoAccount = async () => {
    var info = {};
    var _error = false;
    try {
        const response = await api.post('/api/client-login', {email, password})
        .catch(error => {
            _error = !_error;
        });
        if(_error){
            info.client = {};
            info.client.name = '';
            info.client.surname = '';
            info.client.username = '';
            info.token = '';
            info.isSignedIn = false;
        } else {
            info = response.data;
            info.isSignedIn = true;
            localStorage.setItem('tv-token', response.data.token);
            setGoToIndex(false);
            setGoToMain(true);
            setGoToHistory(false);
            setGoToProfile(false);
        }
        dispatch({type: 'SIGN_IN', payload: info});
        setOpenLogin(false);
    } catch (err) {
        throw(err);
    }
  }

  const signUpAccount = async () => {
    var info = {};
    var _error = false;
    try {
        const response = await api.post('/api/client', {name, surname, username, email, password})
        .catch(error => {
            _error = !_error;
        });
        if(_error){
            info.client = {};
            info.client.name = '';
            info.client.surname = '';
            info.client.username = '';
            info.isSignedIn = false;
        } else {
            info = response.data;
            info.isSignedIn = true;
            localStorage.setItem('tv-token', response.data.token);
            setGoToIndex(false);
            setGoToMain(true);
            setGoToHistory(false);
            setGoToProfile(false);
        }
        dispatch({type: 'SIGN_IN', payload: info});
        setOpenSignup(false);
    } catch (err) {
        throw(err);
    }
  }

  const preventDefault = event => {
    event.preventDefault();
    setGoToIndex(false);
    setGoToMain(true);
    setGoToHistory(false);
    setGoToProfile(false);
    setAnchorEl(null);
    setMobileMoreAnchorEl(null);
  }

  const preventDefault2 = event => {
    event.preventDefault();
  }

  const preventDefaultHistory = event => {
    event.preventDefault();
    setGoToIndex(false);
    setGoToMain(false);
    setGoToHistory(true);
    setGoToProfile(false);
    setAnchorEl(null);
    setMobileMoreAnchorEl(null);
  }

  const preventDefaultProfile = event => {
    event.preventDefault();
    setGoToIndex(false);
    setGoToMain(false);
    setGoToHistory(false);
    setGoToProfile(true);
    setAnchorEl(null);
    setMobileMoreAnchorEl(null);
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={preventDefaultProfile}>
        <Link href="/tecvago/user/" className={classes.link}>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Perfil</p>
        </Link>
      </MenuItem>

      <MenuItem onClick={preventDefaultHistory}>
        <Link href="/tecvago/history/" className={classes.link}>
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <FlightTakeoffIcon />
          </IconButton>
          <p>Mis Viajes</p>
        </Link>
      </MenuItem>

      <MenuItem onClick={logOut}>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <MeetingRoomIcon />
        </IconButton>
        <p>Log Out</p>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Perfil</p>
      </MenuItem>

      <MenuItem>
        <Link href="/tecvago/history/" className={classes.link}>
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <FlightTakeoffIcon />
          </IconButton>
          <p>Mis Viajes</p>
        </Link>
      </MenuItem>

      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <SettingsIcon />
        </IconButton>
        <p>Settings</p>
      </MenuItem>

      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <MeetingRoomIcon />
        </IconButton>
        <p>Log Out</p>
      </MenuItem>
    </Menu>
  );

  const redirectCorrect = () => {
    if(!store.isSignedIn){
      return(
        <Typography className={classes.title} variant="h6" noWrap>
          <Link href="/" className={classes.mainlink} onClick={preventDefault2}>
            TecVago
          </Link>
        </Typography>
      );
    } else {
      return(
        <Typography className={classes.title} variant="h6" noWrap>
          <Link href="/tecvago" className={classes.mainlink} onClick={preventDefault}>
            TecVago
          </Link>
        </Typography>
      );
    }
  }

  const renderStateButtons = () => {
    if(!store.isSignedIn){
      return(
        <React.Fragment>
          <div className={classes.sectionDesktop}>
            <Button variant="contained" color="primary" onClick={handleLoginOpen}>
              Login
            </Button>
            <Button variant="contained" color="secondary" onClick={handleSignupOpen}>
              Sign Up
            </Button>
          </div>

          <Dialog open={openLogin} onClose={handleLoginClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Login</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please enter your email address and password
              </DialogContentText>
              
              <TextField
                autoFocus
                margin="dense"
                id="email"
                label="Email Address"
                type="email"
                value={email}
                onChange={(event) => {setEmail(event.target.value)}}
                fullWidth
              />

              <TextField
                autoFocus
                margin="dense"
                id="password"
                label="Password"
                type="password"
                value={password}
                onChange={(event) => {setPassword(event.target.value)}}
                fullWidth
              />

            </DialogContent>
            <DialogActions>
              <Button onClick={handleLoginClose} color="primary">
                Cancel
              </Button>
              <Button onClick={logIntoAccount} color="primary">
                LogIn
              </Button>
            </DialogActions>
          </Dialog>

          {/*************************************************************/}
          <Dialog open={openSignup} onClose={handleSignupClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Login</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Inserta los siguientes campos para registrarte
              </DialogContentText>
              
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Nombres"
                type="text"
                value={name}
                onChange={(event) => {setName(event.target.value)}}
                fullWidth
              />

              <TextField
                autoFocus
                margin="dense"
                id="surname"
                label="Apellidos"
                type="text"
                value={surname}
                onChange={(event) => {setSurname(event.target.value)}}
                fullWidth
              />

              <TextField
                autoFocus
                margin="dense"
                id="username"
                label="Nombre de Usuario"
                type="text"
                value={username}
                onChange={(event) => {setUsername(event.target.value)}}
                fullWidth
              />

              <TextField
                autoFocus
                margin="dense"
                id="email"
                label="Email Address"
                type="email"
                value={email}
                onChange={(event) => {setEmail(event.target.value)}}
                fullWidth
              />

              <TextField
                autoFocus
                margin="dense"
                id="password"
                label="Password"
                type="password"
                value={password}
                onChange={(event) => {setPassword(event.target.value)}}
                fullWidth
              />

            </DialogContent>
            <DialogActions>
              <Button onClick={handleSignupClose} color="primary">
                Cancel
              </Button>
              <Button onClick={signUpAccount} color="primary">
                Sign Up
              </Button>
            </DialogActions>
          </Dialog>
          {/*************************************************************/}
        </React.Fragment>
      );
    } else {
      return(
        <React.Fragment>
          <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>

          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>

          {renderMobileMenu}
          {renderMenu}
        </React.Fragment>
      );
    }
  }

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          {
            redirectCorrect()
          }

          <div className={classes.grow} />

          {
            renderStateButtons()
          }
        </Toolbar>
      </AppBar>
      {goToIndex && <Redirect to="/"/>}
      {goToMain && <Redirect to="/tecvago" />}
      {goToHistory && <Redirect to="/tecvago/history" />}
      {goToProfile && <Redirect to="/tecvago/user" />}
    </div>
  );
}

export default HeaderMenu;