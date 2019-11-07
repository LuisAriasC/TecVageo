import React from 'react';
import PropTypes from 'prop-types';
import { fade, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';


const styles = theme => ({
  link: {
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
});

class HeaderMenu extends React.Component {

    render(){
        const { classes } = this.props;
        const menuId = 'primary-search-account-menu';
        const mobileMenuId = 'primary-search-account-menu-mobile';
        return(
            <React.Fragment>
                    <div className={classes.grow}>
                      <AppBar position="static">
                        <Toolbar>
                          <Typography className={classes.title} variant="h6" noWrap>
                            <Link
                              to={`/`}
                              //onClick={preventDefault} 
                              className={classes.link}
                            >
                              TecVago
                            </Link>
                          </Typography>

                          <div className={classes.grow} />
                          <div className={classes.sectionDesktop}>
                            <IconButton
                              edge="end"
                              aria-label="account of current user"
                              aria-controls={menuId}
                              aria-haspopup="true"
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
                              color="inherit"
                            >
                              <MoreIcon />
                            </IconButton>
                          </div>
                        </Toolbar>
                      </AppBar>
                      {this.renderMobileMenu}
                      {this.renderMenu}
                    </div>
            </React.Fragment>
        );
    }
}

HeaderMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderMenu);