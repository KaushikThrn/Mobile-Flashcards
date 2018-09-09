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
  state={
    index:0,
    question:"",
    answer:"",
    correct:0,
    incorrect:0,
    showAnswer:false,
    done:false
  }

  toggleCard=()=>{
    this.setState((prevState)=>({showAnswer:!prevState.showAnswer}))
  }

  correct=(length)=>{
    if(this.state.index<length-1){
      this.setState((prevState)=>({correct:prevState.correct+1,index:prevState.index+1}))
    }
    else{
      this.setState((prevState)=>({correct:prevState.correct+1,done:true}))
    }
    
  }

  incorrect=(length)=>{
    if(this.state.index<length-1){
      this.setState((prevState)=>({incorrect:prevState.incorrect+1,index:prevState.index+1}))
    }
    else{
      this.setState((prevState)=>({incorrect:prevState.incorrect+1,done:true}))
    }
  }

 render(){
   const deckName=this.props.navigation.getParam("deckName")
   const cards=this.props.deck[deckName]["cards"]
   const length=this.props.deck[deckName]["cards"].length
   return(
            <View>
            {this.state.done?<Text>Done, Your score is {(this.state.correct/length)*100}% </Text>:this.state.showAnswer?<Text>{cards[this.state.index]["question"]}</Text>:<Text>{cards[this.state.index]["answer"]}</Text>}
            <Button title="Answer" onPress={()=>{this.toggleCard()}}/>
            <Button title="Correct" onPress={()=>{this.correct(length)}}/>
            <Button title="Incorrect" onPress={()=>{this.incorrect(length)}}/>
            </View>
        )
        
    }
}

export default connect(mapStatetoProps)(Quiz)
