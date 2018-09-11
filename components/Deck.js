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
import { withNavigation } from 'react-navigation';


class Deck extends Component {

 render(){
        const {deckName, length}=this.props
        return (
            <View>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate("DeckView",{deckName,length})}}>
                <Text style={{fontSize: 20}}>{deckName}</Text>
                <Text style={{fontSize: 20}}>{length} Cards</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default withNavigation(Deck);
