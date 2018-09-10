
//Get all the decks from async storage and insert into redux store
export function getDecks (entries) {
    return {
        type: "INSERT_DECKS",
        entries
    }
}

//add a new deck to the redux store
export function addDeckName (name) {
    return {
        type: "ADD-DECK",
        entry:{[name]:{cards:[]}}
    }
}

//add a new card to the redux store
export function addCard (deckName,question,answer) {
    return {
            type:"ADD-CARD",
            deckName,
            entry:{question:question,answer:answer}
        }
}
