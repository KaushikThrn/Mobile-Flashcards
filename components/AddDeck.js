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
import {saveDeckTitle} from '../utils/api'
import {addDeckName} from '../actions/index'

const mapStatetoProps=(state)=>{
    return{deck:state.decks}
}

const mapDispatchtoProps=(dispatch)=>{
   return {
    onSubmit:(name)=>{

        dispatch(addDeckName(name))
        //add in async storage
        saveDeckTitle({[name]:{cards:[]}})
    }
   } 
}


class AddDeck extends Component {


    state={
        title:"",
        error:false
    }
    
    updateTitle=(title)=>{
            this.setState({error:false})
            this.setState({title:title})
        }

    submit=(title)=>{
            
            this.props.onSubmit(title)
            this.setState({title:""});
        }
        


    render(){

        return (
            <View>
               <FormLabel>Deck Name</FormLabel>
                <FormInput value={this.state.title} onChangeText={(Text)=>{this.updateTitle(Text)}} />
                {this.state.error?<FormValidationMessage>This field is required</FormValidationMessage>:null}
                 <Button
                  title="Submit" onPress={()=>{this.state.title===""?this.setState({error:true}):this.submit(this.state.title)}}/>
            </View>
        )
    }
}
   
export default connect(mapStatetoProps,mapDispatchtoProps)(AddDeck)
