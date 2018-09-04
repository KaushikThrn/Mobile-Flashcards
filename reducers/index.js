import { GET_DECKS, GET_DECK, ADD_DECK, ADD_CARD_TO_DECK } from '../actions'

const initState = {
    decks: [],
}
export function decks (state = initState, action) {
    switch (action.type) {
        case "ADD":
                return {
                    ...state,
                    decks:state.decks.concat({name: action.name,cards:[]})
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