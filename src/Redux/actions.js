import { GET_USERS, POST_USER, GET_DECKS, POST_DECK, POST_CARD, DELETE_DECK, DELETE_CARD, PATCH_DECK_COMPLETED, PATCH_CARD } from './actionTypes';

const BASE_URL = "http://localhost:4000"

export function getUsers() {
	return function (dispatch) {
		fetch(`${BASE_URL}/api/v1/users`)
			.then(response => response.json())
			.then(arrayOfUsers => {
				dispatch({ type: GET_USERS, payload: arrayOfUsers })
			})
	}
}

export function postUser(newUser) {
	return function (dispatch) {
		fetch(`${BASE_URL}/api/v1/users`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newUser),
		})
			.then(response => response.json())
			.then(user => {
				dispatch({ type: POST_USER, payload: user })
			})
	}
}

export function getDecks() {
	return function (dispatch) {
		fetch(`${BASE_URL}/api/v1/decks`)
			.then(response => response.json())
			.then(arrayOfDecks => {
				dispatch({ type: GET_DECKS, payload: arrayOfDecks })
			})
	}
}

export function postDeck(newDeckObj) {
	return function (dispatch) {
		fetch(`${BASE_URL}/api/v1/decks`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newDeckObj),
		})
			.then(response => response.json())
			.then(deckObj => {
				dispatch({ type: POST_DECK, payload: deckObj })
			})
	}
}

export function deleteDeck(deckObjId) {
	return function (dispatch) {
		fetch(`${BASE_URL}/api/v1/decks/${deckObjId}`, {
			method: 'DELETE',
		})
			.then(response => response.json())
			.then(deckObj => {
				dispatch({ type: DELETE_DECK, payload: deckObjId })
			})
	}
}

export function patchDeckCompleted(deckObj) {
	return function (dispatch) {
		fetch(`${BASE_URL}/api/v1/decks/${deckObj.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(deckObj),
		})
			.then(response => response.json())
			.then(returnedDeckObj => {
				dispatch({ type: PATCH_DECK_COMPLETED, payload: returnedDeckObj })
			})
	}
}

export function postCard(newCardObj) {
	return function (dispatch) {
		fetch(`${BASE_URL}/api/v1/cards`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newCardObj),
		})
			.then(response => response.json())
			.then(cardObj => {
				dispatch({ type: POST_CARD, payload: cardObj })
			})
	}
}

export function deleteCard(cardObj) {
	return function (dispatch) {
		fetch(`${BASE_URL}/api/v1/cards/${cardObj.id}`, {
			method: 'DELETE',
		})
			.then(response => response.json())
			.then(data => {
				dispatch({ type: DELETE_CARD, payload: cardObj })
			})
	}
}

export function patchCard(updatedCardObj) {
	return function (dispatch) {
		fetch(`${BASE_URL}/api/v1/cards/${updatedCardObj.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updatedCardObj),
		})
			.then(response => response.json())
			.then(cardObj => {
				dispatch({ type: PATCH_CARD, payload: cardObj })
			})
	}
}