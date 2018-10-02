import React, { Component } from 'react';
import { connect } from 'react-redux'
import Deck from "./Deck"
import {
    Platform,
    Text,
    View,
    TouchableOpacity,
    ActivityIndicator,
    Button,
    Animated 
} from 'react-native';
import {clearLocalNotifications,setLocalNotification} from '../utils/helpers'


const mapStatetoProps=(state)=>{
   return {
       decks:state
   } 
}

class DeckView extends Component {

    static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('deckName'),
    };
  };

  state={
    opacity:new Animated.Value(0)
  }

  componentDidMount() {
    const {opacity}=this.state
    Animated.timing(opacity,{toValue:1,duration:2000}).start()
  }
//open the quiz view
  openQuiz=(deckName)=>{

    clearLocalNotifications()
      .then(setLocalNotification)
    this.props.navigation.navigate("Quiz",{deckName:deckName})
  }

 render(){
    const {navigation}=this.props
    const deckName=navigation.getParam("deckName")
    const {opacity}=this.state
    return(
            <Animated.View style={[{opacity}]}>
            <Text>{deckName}</Text>
            <Text>{this.props.decks[deckName]["cards"].length} cards</Text>
            <Button
                  title="AddCard" onPress={()=>{navigation.navigate("DeckDetails",{deckName:deckName})}}/> 
                  <Button
                  title="Quiz" onPress={()=>{this.openQuiz(deckName)}}/>
            </Animated.View>
        )
        
    }
}

export default connect(mapStatetoProps)(DeckView)



