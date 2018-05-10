import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image
} from 'react-native';

export default class mimimiGenerator extends Component{
  constructor(props){
    super(props);

    this.state = {text1:'Text1',
                  text2:'Text2'};

    this.typedText = this.typedText.bind(this);
  }

  changeVowel(t){
    let newText = t.toLowerCase();

    newText = newText.replace(/(a|e|i|o|u)/g, 'i');
		newText = newText.replace(/(á|à|ã|â)/g, 'i');
		newText = newText.replace(/(é|è|ê)/g, 'i');
		newText = newText.replace(/(í|ì|î)/g, 'i');
		newText = newText.replace(/(ó|ò|ô)/g, 'i');
		newText = newText.replace(/(ú|ù|û)/g, 'i');

    return newText;
  }

  typedText(t){
      let localState = this.state;
      localState.text1 = t;
      localState.text2 = this.changeVowel(t);
      this.setState(localState);
  }

  render(){
    return(
        <View style={styles.body}>
            <View>
                <Text style={styles.title}> Mimimi Generator </Text>
            </View>

            <View style={styles.inputArea}>
                <TextInput style={styles.input} placeholder="Type your mimimi" onChangeText={this.typedText}/>
            </View>

            <View style={styles.area}>
                <Text style={[styles.text, styles.text1]}> {this.state.text1.toUpperCase()}</Text>
                <Image style={styles.boy} source={require('./images/mimimi.jpg')} />
                <Text style={[styles.text, styles.text2]}> {this.state.text2.toUpperCase()} </Text>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    body:{
      backgroundColor:'#999999',
      paddingTop:30,
      flex:1,
      flexDirection:'column',
      alignItems:'center'
    },
    title:{
      fontSize:30,
      color:'#FFFFFF'
    },
    inputArea:{
      alignSelf:'stretch'
    },
    input:{
      borderWidth:1,
      borderColor:'#999999',
      backgroundColor:'#EEEEEE',
      color:'#000000',
      height:40,
      margin:20,
      padding:10
    },
    area:{
      width:300,
      height:300,
      marginTop:10
    },
    boy:{
      width:300,
      height:300,
      marginTop:-70,
      zIndex:0

    },
    text:{
      fontSize:25,
      color:'white',
      padding:10,
      backgroundColor:'transparent',
      fontWeight:'bold',
      textAlign:'center',
      height:50
    },
    text1:{
      zIndex:1
    },
    text2:{
      zIndex:1,
      marginTop:-70
    }
});
