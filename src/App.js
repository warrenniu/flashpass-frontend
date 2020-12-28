import './App.css';
import React from 'react';
import {Route, Switch} from 'react-router-dom'
import DeckContainer from './Containers/DeckContainer'
import LogInComponent from './Components/LogInComponent'
import SignUpComponent from './Components/SignUpComponent'

function App() {
  return (
    <div className="parent">
			<div className="div1">Title Div</div>
			<div className="div2">NavBar Div</div>
			<div className="div3">
				Main Div
				<Switch>
					<Route path="/login" component={LogInComponent} />
					<Route path="/signup" component={SignUpComponent} />
					<Route path="/" component={DeckContainer} />
				</Switch>
			</div>
			<div className="div4">Footer Div</div>
    </div>
  );
}

export default App;
