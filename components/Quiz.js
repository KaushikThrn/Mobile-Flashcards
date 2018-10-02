import React, { Component } from 'react';
import { connect } from 'react-redux'
import Deck from "./Deck"
import {
    Platform,
    Text,
    View,
    TouchableOpacity,
    ActivityIndicator,
    Button
} from 'react-native';


const mapStatetoProps=(state)=>{
   return {
       deck:state
   } 
}

class Quiz extends Component {

static navigationOptions = {
    title: 'Quiz',
 };

  state={
    index:0,
    correct:0,
    incorrect:0,
    showAnswer:false,
    done:false
  }
 //Flip the card to show either the question or the answer
  toggleCard=()=>{
    this.setState((prevState)=>({showAnswer:!prevState.showAnswer}))
  }
 //If the guess correct, update the state values
  correct=(length)=>{
    if(this.state.index<length-1){
      this.setState((prevState)=>({correct:prevState.correct+1,index:prevState.index+1}))
    }
    else{
      this.setState((prevState)=>({correct:prevState.correct+1,done:true}))
    }
    
  }
  //If the guess incorrect, update the state values
  incorrect=(length)=>{
    if(this.state.index<length-1){
      this.setState((prevState)=>({incorrect:prevState.incorrect+1,index:prevState.index+1}))
    }
    else{
      this.setState((prevState)=>({incorrect:prevState.incorrect+1,done:true}))
    }
  }

  restartQuiz=()=>{
    this.setState({
      index:0,
      correct:0,
      incorrect:0,
      showAnswer:false,
      done:false
    })
  }

 render(){
   const deckName=this.props.navigation.getParam("deckName")
   const cards=this.props.deck[deckName]["cards"]
   const length=this.props.deck[deckName]["cards"].length
   if(length>0){
   return( 
            <View>
            <Text>{this.state.index+1}/{length}</Text>
            {this.state.done?<Text>Done, Your score is {(this.state.correct/length)*100}% 
            </Text>:this.state.showAnswer?<Text>{cards[this.state.index]["question"]}</Text>:<Text>{cards[this.state.index]["answer"]}</Text>}
            {this.state.done?(
            <View>
              <Button title="Restart Quiz" onPress={()=>{this.restartQuiz()}}/>
              <Button title="Back to Deck" onPress={()=>{this.props.navigation.navigate("DeckView",{deckName})}}/>
            </View>
              ):null}
            {!this.state.done?(
            <View>
              <Button title="Flip Card" onPress={()=>{this.toggleCard()}}/>
              <Button title="Correct" onPress={()=>{this.correct(length)}}/>
              <Button title="Incorrect" onPress={()=>{this.incorrect(length)}}/>
            </View>
              ):null
           }
            </View>
        )}
    else{
      return(
        <View><Text>There are no cards in this deck</Text></View>
        )
    }
        
    }
}

export default connect(mapStatetoProps)(Quiz)
