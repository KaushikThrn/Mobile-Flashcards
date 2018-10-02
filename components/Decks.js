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
    FlatList
} from 'react-native';
import {fetchAllDecks,removeAllDecks} from '../utils/api'
import {getDecks} from '../actions/index'
import {styles} from '../utils/styles'

const mapStatetoProps=(state)=>{
    return {decks:state}
}

class Decks extends Component {
    


    componentDidMount () {
    const { dispatch } = this.props
    //Fetch all decks from asyncstorage and insert into redux store
    fetchAllDecks()
      .then((entries) => {dispatch(getDecks(entries))})
  }
   

 render(){
        const {decks}=this.props
            return (
            <View style={[styles.container,{alignItems:"center",justifyContent: 'space-around'}]}>
                <Text style={{fontSize: 30}}>Decks</Text>{
                Object.keys(this.props.decks).length>0?(
                <FlatList data={Object.keys(this.props.decks)} renderItem={({item})=>
                {
                    const length=this.props.decks[item]["cards"].length
                    return(
                        <Deck key={item} deckName={item} length={length} style={{fontSize: 10}}/>
                        )
                    }}
                    keyExtractor={(item, index) => index.toString()} 
                     />
                ):<Text style={{fontSize: 30}}>No decks</Text>}
            </View>
        )
        

    }
}

export default connect(mapStatetoProps)(Decks)



