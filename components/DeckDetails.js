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
import {addCardToDeck} from '../utils/api'
import {addCard} from '../actions/index'

const mapDispatchtoProps=(dispatch)=>{
   return {
    onSubmit:(deckName,question,answer)=>{
        //Add the card to redux store
        dispatch(addCard(deckName,question,answer))

        //add card to async storage
        addCardToDeck(deckName,question,answer)
    }
   } 
}

const mapStatetoProps=(state)=>{
    return{deck:state.decks}
}

class DeckDetails extends Component {
    static navigationOptions = {
    title: 'Add Card',
 };
    state={question:"",
           answer:"",
           error:false
}
 updateTitle=(key,value)=>{
        this.setState({[key]:value,error:false})

    }

    submit=(deckName,question,answer)=>{
        this.props.onSubmit(deckName,question,answer)
        this.setState({question:"",answer:""})
    }
 render(){
      const {navigation}=this.props
      const deckName=navigation.getParam("deckName")
        return (
            <View>
                <Text>{deckName}</Text>
                <View>
                    <FormLabel>Question</FormLabel>
                    <FormInput value={this.state.question} onChangeText={(text)=>{this.updateTitle("question",text)}} />
                    <FormLabel>Answer</FormLabel>
                    <FormInput value={this.state.answer} onChangeText={(text)=>{this.updateTitle("answer",text)}} />
                    {this.state.error?<FormValidationMessage>All fields are required</FormValidationMessage>:null}
                    <Button
                     title="Submit" onPress={()=>{(this.state.question===""||this.state.answer==="")?this.setState({error:true}):this.submit(deckName,this.state.question,this.state.answer)}}/>
            </View>
            </View>
        )
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(DeckDetails)