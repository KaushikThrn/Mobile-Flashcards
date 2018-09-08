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
                <Text onPress={()=>{this.props.navigation.navigate("DeckDetails",{deckName,length})}}>{deckName}</Text>
                <Text>{length}</Text>
            </View>
        )
    }
}

export default withNavigation(Deck);