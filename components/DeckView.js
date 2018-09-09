import React, { Component } from 'react';
import { connect } from 'react-redux'
import Deck from "./Deck"
import {
    Platform,
    Text,
    View,
    TouchableOpacity,
    ActivityIndicator,
    Button
} from 'react-native';

class DeckView extends Component {

 render(){
    const {navigation}=this.props
    const deckName=navigation.getParam("deckName")
    const length=navigation.getParam("length")
    return(
            <View>
            <Text>{deckName}</Text>
            <Text>{length} cards</Text>
            <Button
                  title="AddCard" onPress={()=>{}}/>
                  <Button
                  title="Quiz" onPress={()=>{}}/>
            </View>
        )
        
    }
}

export default DeckView



