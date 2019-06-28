import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

import { drawerWidth } from "../MiniDrawer/MiniDrawer"
import { connect } from "react-redux"

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: 'none',
  },
  menuButton: {
    marginRight: 36,
  }
}));

const Navbar = (props) => {
  const classes = useStyles();

  //console.log(props.drawerIsOpened)

  return (
    <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: props.drawerIsOpened,
        })}
      >
        <Toolbar>
          <MenuIcon className={clsx(classes.menuButton, {
              [classes.hide]: props.drawerIsOpened,
            })}/>
          <Typography variant="h6" noWrap>
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
  );
}

const mapStateToProps = state => {
  const {drawerIsOpened} = state;
  return {drawerIsOpened}
}

export default connect(mapStateToProps)(Navbar)

