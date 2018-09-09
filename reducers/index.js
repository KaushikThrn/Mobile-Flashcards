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
                state1=Object.assign({},state)
                state1[action.deckName]["cards"]=state1[action.deckName]["cards"].concat([action.entry])
            return state1
        default:
            return state
    }
}