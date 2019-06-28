import React from 'react';
import { Router } from "react-router-dom"
import { createBrowserHistory } from "history";
import { Provider } from 'react-redux';

// material ui
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

// components
import Routes from "./routes"
import Navbar from './components/Navbar/Navbar'
import MiniDrawer from "./components/MiniDrawer/MiniDrawer"
import RTestboard from "./components/RTestboard"
import RenderDialog from "./components/Dialog/RenderDialog"

// actions
//import { actions } from './redux';

// store
import store from './redux-store';

// css
import './App.css';

const customHistory = createBrowserHistory();

const useStyles = makeStyles((theme) => ({
  appContainer: {
    display:'flex'
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: theme.spacing(8)
  },
}));


function App() {
  const classes = useStyles();

  // setTimeout(()=>{
  //   store.dispatch(actions.setActiveDialog(''))
  // },3000)
  
  return (
    <Provider store={store}>
      <div className={classes.appContainer}>
        <CssBaseline />
        <RenderDialog />
        <Navbar />
        <MiniDrawer />
        <main className={classes.content}>
          <RTestboard />
          <Router history={customHistory}>
            <Routes />
          </Router>
        </main>
      </div>
    </Provider>
  );
}

export default App;