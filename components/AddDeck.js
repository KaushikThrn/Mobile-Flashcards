import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Platform,
    Alert,
    KeyboardAvoidingView,
    Keyboard,
    Button
} from 'react-native';

const mapStatetoProps=(state)=>{
    return{deck:state.decks}
}


class AddDeck extends Component {
    render(){

        return (
            <View>
                <Text>Add Deck</Text>
                <Text>{this.props.deck[0]}</Text>
                 <Button
                  title="Deck details"
                  onPress={() => this.props.navigation.navigate('DeckDetails')}/>
            </View>
        )
    }
}
   
export default connect(mapStatetoProps)(AddDeck)
