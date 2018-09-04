import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    Platform,
    Text,
    View,
    TouchableOpacity,
    ActivityIndicator,
    Button
} from 'react-native';

const mapStatetoProps=(state)=>{
    return{deck:state.decks}
}

class DeckDetails extends Component {
 render(){
        return (
            <View>
                <Text>Displaying the Deck</Text>
                <Text>{this.props.deck[0]["name"]}</Text>
            </View>
        )
    }
}

export default connect(mapStatetoProps)(DeckDetails)