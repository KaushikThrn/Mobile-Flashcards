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
import {fetchAllDecks,removeAllDecks} from '../utils/api'
import {getDecks} from '../actions/index'

const mapStatetoProps=(state)=>{
    return {decks:state}
}

class Decks extends Component {
    

    state={ready:true}

    componentDidMount () {
    const { dispatch } = this.props

    fetchAllDecks()
      .then((entries) => {dispatch(getDecks(entries))})
  }
   

 render(){
        const {decks}=this.props
        if(this.state.ready){
            return (
            <View>
                <Text>Displaying the Deck</Text>{
                Object.keys(this.props.decks).length>0?Object.keys(this.props.decks).map((deck)=>{
                    const length=this.props.decks[deck]["cards"].length
                    return(
                        <Deck key={deck} deckName={deck} length={length} />
                        )
                    }

                ):<Text>No decks</Text>}
            </View>
        )
        }
        else{
            return(
                <View><Text>loading</Text></View>
                )
        }
        
    }
}

export default connect(mapStatetoProps)(Decks)



