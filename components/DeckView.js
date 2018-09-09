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


const mapStatetoProps=(state)=>{
   return {
       decks:state
   } 
}

class DeckView extends Component {

 render(){
    const {navigation}=this.props
    const deckName=navigation.getParam("deckName")
    const length=navigation.getParam("length")
    return(
            <View>
            <Text>{deckName}</Text>
            <Text>{this.props.decks[deckName]["cards"].length} cards</Text>
            <Button
                  title="AddCard" onPress={()=>{navigation.navigate("DeckDetails",{deckName:deckName})}}/> 
                  <Button
                  title="Quiz" onPress={()=>{navigation.navigate("Quiz",{deckName:deckName})}}/>
            </View>
        )
        
    }
}

export default connect(mapStatetoProps)(DeckView)



