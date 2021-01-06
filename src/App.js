import './App.css';
import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom'
import NavComponent from './Components/NavComponent'
import DeckContainer from './Containers/DeckContainer'
import LogInComponent from './Components/LogInComponent'
import SignUpComponent from './Components/SignUpComponent'
import {connect} from 'react-redux'
import {getUser} from './Redux/actions'

class App extends React.Component {

	BASE_URL = "http://localhost:4000"

	componentDidMount() {
		const token = localStorage.getItem("token")
		if (token) {
			fetch(`${this.BASE_URL}/api/v1/profile`, {
				method: "GET",
				headers: {Authorization: `Bearer ${token}`},
			})
				.then(resp => resp.json())
				.then(data => {
					this.props.getUser(data)
				})
			} else {
				this.props.history.push('/')
			}
		}

	render () {
		return (
			<div className="parent">
				<div className="div1">
					<img src="/logo.png" alt="logo" />
				</div>
				<div className="div2">
					<NavComponent />
				</div>
				<div className="div3">
					<Switch>
						<Route path="/login" component={LogInComponent} />
						<Route path="/signup" component={SignUpComponent} />
						<Route path="/" component={DeckContainer} />
					</Switch>
				</div>
				<div className="div4">
					<p>Copyright 2021 FlashPass: A Warren Niu & Roman Tetelbaum</p>
					<img src="/github.png" alt="github" />
				</div>
			</div>
		);
}
}

function mdp(dispatch) {
	return {
		getUser: currentUser => dispatch(getUser(currentUser))
	}
}

export default connect(null, mdp)(withRouter(App));
