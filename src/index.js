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
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const store = createStore(rootReducer, applyMiddleware(thunk))

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#33a472',
			// main: '#008E4F',
			main: '#fff',
      dark: '#d3d3d3',
      contrastText: '#000',
    },
    secondary: {
      light: '#ffff5f',
      main: '#fffb18',
      dark: '#c8c800',
      contrastText: '#000',
		}
  },
})

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Router>
		  <Provider store={store}>
				<MuiThemeProvider theme={theme}>
					<App />
				</MuiThemeProvider>
		  </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);