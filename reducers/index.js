import { GET_DECKS, GET_DECK, ADD_DECK, ADD_CARD_TO_DECK } from '../actions'

const initState = {
    decks: [],
}
export function decks (state = {}, action) {
    switch (action.type) {
        case "INSERTDECKS":
                return {
                    ...state,
                    ...action.entries
                }
        case "ADD-DECK":
                return {
                    ...state,
                    ...action.entry
                }
        case "ADD-CARD":
            return {
                ...state,
                deck: action.deck
            }
        default:
            return state
    }
}