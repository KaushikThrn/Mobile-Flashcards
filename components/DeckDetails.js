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
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';




class DeckDetails extends Component {
 
 render(){
      const {navigation}=this.props
        return (
            <View>
                <Text>{navigation.getParam("deckName")}</Text>
            </View>
        )
    }
}

export default connect()(DeckDetails)