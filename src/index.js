import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './Redux/rootReducer';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import 'fontsource-roboto';
import CssBaseline from '@material-ui/core/CssBaseline';
// import { ThemeProvider } from '@material-ui/styles';
// import { createMuiTheme } from '@material-ui/core/styles';
// import { purple } from '@material-ui/core/colors';

const store = createStore(rootReducer, applyMiddleware(thunk))



ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Router>
		  <Provider store={store}>
    	  <App />
		  </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);