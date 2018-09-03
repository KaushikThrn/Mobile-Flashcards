import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import AddDeck from './components/AddDeck';
import DeckDetails from './components/DeckDetails';
import {decks} from './reducers/index.js'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


 export default class App extends React.Component {
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
    Add: {
      screen:AddDeck
    },
    DeckDetails: {
      screen:DeckDetails
    },
  }
);

const StackNav= createStackNavigator({
    Home:{
      screen:Tabs
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
