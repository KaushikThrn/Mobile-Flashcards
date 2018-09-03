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

class DeckDetails extends Component {
 render(){
        return (
            <View>
                <Text>Deck Details</Text>
                <View>
                <Text>Add Deck</Text>
                 <Button
                  title="Deck details"
                  onPress={() => this.props.navigation.navigate('DeckDetails')}/>
            </View>
            </View>
        )
    }
}

export default DeckDetails