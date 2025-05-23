export function decks (state = {}, action) {
    switch (action.type) {
        case "INSERT_DECKS":
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
                const state1 = Object.assign({}, state)
                state1[action.deckName]["cards"] = state1[action.deckName]["cards"].concat([action.entry])
            return state1
        default:
            return state
    }
}