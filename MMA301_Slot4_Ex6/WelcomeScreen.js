import * as React from 'react';
import { ScrollView, Text, StyleSheet,TextInput,View } from 'react-native';

export default function WelcomeScreen() {
  const [text,setText]=React.useState();
  return (
    <ScrollView indicatorStyle="white" style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon {text}</Text>
      <Text style={styles.regularText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
      <View style={{ alignItems:"center"}}>
      <TextInput onChangeText={(e)=>{
        setText(e)
      }} style={styles.inputStyle}
      placeholder='Title name'/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  inputStyle:{
    flex:1,
    justifyContent:"center",
    width: 200,
    textAlign:"center", 
    alignItems: 'center',
    backgroundColor:"white",
  }
});
