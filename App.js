import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import AddDeck from './components/AddDeck';
import DeckView from './components/DeckView';
import DeckDetails from './components/DeckDetails';
import Decks from './components/Decks';
import Deck from './components/Deck';
import Quiz from './components/Quiz';
import {decks} from './reducers/index.js'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {setLocalNotification} from './utils/helpers'


 export default class App extends React.Component {
  
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
         <Provider store={createStore(decks)}>
          <StackNav />
        </Provider>
    );
  }
}

const Tabs= createBottomTabNavigator(
  {
    Decks: {
      screen:Decks
    },
    AddDeck: {
      screen:AddDeck
    },
    
  }
);

const StackNav= createStackNavigator({
    Home:{
      screen:Tabs
    },
    DeckDetails: {
      screen:DeckDetails
    },
    Deck: {
      screen:Deck
    },
    DeckView: {
      screen:DeckView
    },
    Quiz: {
      screen:Quiz
    },
    
});




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
