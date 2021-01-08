import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {postDeck} from '../Redux/actions'
import Button from '@material-ui/core/Button'

class CreateDeckComponent extends React.Component {

	state = {
		title: "",
		subject: "",
		completed: false,
		user_id: this.props.user.id
	}
	
	inputChangeHandler = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	formSubmitHandler = (e) => {
		e.preventDefault()
		this.props.postDeck(this.state)
		this.setState({title: "", subject: ""})
		this.props.history.push("/decks")
	}

	render() {
		return (
			<div style={{
				'border': '2px solid white',
				'borderRadius': '3%',
				'boxShadow': `5px 5px 5px 2px lightgrey`,
				'width': '250px',
				'margin': '15px',
				'padding': '15px',
				'textAlign': 'center',
				'marginLeft': 'auto',
				'marginRight': 'auto'
				}}>
				<h3 style={{'color': '#FFF'}}>Create FlashDeck</h3>
				<form onSubmit={this.formSubmitHandler}>
					<input className='inputOverride' style={{'marginBottom': '10px'}} type="text" placeholder="title" name="title" value={this.state.title} onChange={this.inputChangeHandler} /><br />
					<input className='inputOverride' style={{'marginBottom': '10px'}} type="text" placeholder="subject" name="subject" value={this.state.subject}onChange={this.inputChangeHandler} /><br />
					<Button variant="contained" color="primary" type="submit">
						Add Deck
					</Button>
				</form>
			</div>
		)
	}
}

function msp(state) {
	return {
		user: state.user
	}
}

function mdp(dispatch) {
	return {
		postDeck: newDeckObj => dispatch(postDeck(newDeckObj))
	}
}

export default connect(msp, mdp)(withRouter(CreateDeckComponent))