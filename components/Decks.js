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
    return {decks:state}
}

class Decks extends Component {

 render(){
        const {decks}=this.props
        console.log("this here",decks)
        return (
            <View>
                <Text>Displaying the Deck</Text>{
                Object.keys(this.props.decks).length>0?Object.keys(this.props.decks).map((deck)=>{
                    const length=this.props.decks[deck]["cards"].length
                    return(
                        <Deck key={deck} deckName={deck} length={length} />
                        )
                    }

                ):<Text>No decks</Text>}
            </View>
        )
    }
}

export default connect(mapStatetoProps)(Decks)



