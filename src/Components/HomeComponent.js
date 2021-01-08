import React from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import {connect} from 'react-redux'

class HomeComponent extends React.Component {
	render() {
		return (
			<div className="roll-in-left">

				{this.props.user !== null ?
					<h1 style={{'color': '#FFF', 'fontFamily': 'Reenie Beanie', 'fontSize': '48px'}}>Welcome {this.props.user.first_name}!</h1>
					: 
					null
				}

				<Flippy
					flipOnHover={false}
					flipOnClick={true}
					flipDirection="horizontal"
					ref={(r) => this.flippy = r}
					style={{
						width: '500px',
						height: '375px'
					}}
				>
					<FrontSide style={{
						'backgroundColor': 'rgba(211,211,211, .5)',
						'border': "2px solid white",
						'borderRadius': '3%',
						'boxShadow': `5px 5px 5px 2px lightgrey`,
						'color': 'white',
						'fontSize': '24px',
						'textAlign': 'center'
					}}>
						<h3>Welcome to FlashPass</h3>
						<p>Your resource for study flash cards. Click me to find out more! </p>
					</FrontSide>
					<BackSide style={{
						'backgroundColor': 'rgba(211,211,211, .5)',
						'border': "2px solid white",
						'boxShadow': `5px 5px 5px 2px lightgrey`,
						'borderRadius': '3%',
						'color': 'white',
						'fontSize': '24px'
					}}>
						<h3 style={{textAlign: 'center'}}>Instructions</h3>
						<ol>
							<li>Create an account</li>
							<li>Create a deck, or what we like to call, a FlashDeck!</li>
							<li>Add flash cards with questions and answers to your FlashDeck</li>
							<li>FlashPass your exam!</li>
						</ol>
					</BackSide>
				</Flippy>
			</div>
		)
	}
}

function msp(state) {
	return {
		user: state.user
	}
}

export default connect(msp)(HomeComponent)