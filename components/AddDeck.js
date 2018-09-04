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
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

const mapStatetoProps=(state)=>{
    return{deck:state.decks}
}

const mapDispatchtoProps=(dispatch)=>{
   return {
    onSubmit:(name)=>{
        dispatch({
            type:"ADD",
            name
        })
    }
   } 
}


class AddDeck extends Component {
    state={
        title:"",
    }
    
    updateTitle=(title)=>{
        this.setState({title:title})

    }

    render(){

        return (
            <View>
               <FormLabel>Deck Name</FormLabel>
                <FormInput onChangeText={(Text)=>{this.updateTitle(Text)}} />
                 <Button
                  title="Submit" onPress={()=>{this.props.onSubmit(this.state.title)}}/>
                  <Text>{this.state.title}</Text>
            </View>
        )
    }
}
   
export default connect(mapStatetoProps,mapDispatchtoProps)(AddDeck)
