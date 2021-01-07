import React from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import {connect} from 'react-redux'

class HomeComponent extends React.Component {
	render() {
		return (
			<div className="roll-in-left">

				{this.props.user !== null ?
					<h1 style={{'color': '#008E4F'}}>Welcome {this.props.user.first_name}!</h1>
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
						'backgroundColor': '#FFFB18',
						'border': "1px solid black",
						'borderRadius': '3%',
						'boxShadow': `5px 5px 5px 2px grey`,
						'color': '#000000',
						'fontSize': '24px',
						'textAlign': 'center'
					}}>
						<h3>Welcome to FlashPass</h3>
						<p>Your resource for study flash cards. Click me to find out more! </p>
					</FrontSide>
					<BackSide style={{
						'backgroundColor': '#FFFB18',
						'border': "1px solid black",
						'boxShadow': `5px 5px 5px 2px grey`,
						'borderRadius': '3%',
						'color': '#000000',
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