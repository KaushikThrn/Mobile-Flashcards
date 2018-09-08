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
    state={question:"",
           answer:""
}
 updateTitle=(key,value)=>{
        this.setState({[key]:value})

    }
 render(){
      const {navigation}=this.props
        return (
            <View>
                <Text>{navigation.getParam("deckName")}</Text>
                <View>
                    <FormLabel>Question</FormLabel>
                    <FormInput onChangeText={(text)=>{this.updateTitle("question",text)}} />
                    <FormLabel>Answer</FormLabel>
                    <FormInput onChangeText={(text)=>{this.updateTitle("answer",text)}} />
                    <Text>{this.state.question}</Text>
                    <Text>{this.state.answer}</Text>
            </View>
            </View>
        )
    }
}

export default connect()(DeckDetails)