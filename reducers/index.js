import { GET_DECKS, GET_DECK, ADD_DECK, ADD_CARD_TO_DECK } from '../actions'

const initState = {
    decks: ['inital_test'],
}
export function decks (state = initState, action) {
    switch (action.type) {
        case "ADD":
                return {
                    ...state,
                    decks:state.decks.concat([action.value])
                }
        case "REMOVE":
            return {
                ...state,
                deck: action.deck
            }
        default:
            return state
    }
}