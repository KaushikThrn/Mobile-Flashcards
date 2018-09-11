import { AsyncStorage } from 'react-native'

const DECK_STORAGE_KEY = 'MobileFlashCards:decks'

//fetch all decks from async storage
export function fetchAllDecks () {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then( (results) => {
            return JSON.parse(results)
        })
}


// Create a new Deck
export function saveDeckTitle (entry) {
    return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(entry))
}

// Add a new card to a specific deck
export function addCardToDeck (deckName, question,answer) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then((results) => {
            const newCard={question:question,answer:answer}
            const data = JSON.parse(results)
            state1=Object.assign({},data)
            state1[deckName]["cards"]=state1[deckName]["cards"].concat(newCard)
            console.log("addcard",JSON.stringify(state1))
            AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(state1))
            
        })
}


 //remove a deck from storage
export function removeDeck (deck) {
    return AsyncStorage.getItem(DECK_STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results)
            data[deck] = undefined
            delete data[deck]
            AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
        })
}
//remove all decks from async storage
export function removeAllDecks () {
    return AsyncStorage.removeItem(DECK_STORAGE_KEY)
}

