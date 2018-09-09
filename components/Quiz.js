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

class Quiz extends Component {

 render(){
    return(
            <View>
            <Text>Quiz</Text>
            </View>
        )
        
    }
}

export default connect(mapStatetoProps)(Quiz)
