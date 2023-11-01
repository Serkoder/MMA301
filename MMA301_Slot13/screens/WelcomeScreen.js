import * as React from "react";
import { Image, Pressable, Text, View, StyleSheet } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View style={style.container}>
      <View style={style.logoContainer}>
        <Image
          style={style.image}
          source={require("../assets/little-lemon-logo.png")}
        />
        <Text style={style.logoHeading}>Little Lemon, your local Mediterranean Bistro</Text>
      </View>
      <Pressable style={pressed => [
        {
          backgroundColor: pressed ? '#278c87' : '#1a635f',
        },
        style.button
      ]}
        onPress={() => {
          navigation.navigate("subscribe")
        }}
      >
        <Text style={style.buttonTitle}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

export default WelcomeScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },  
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1
  },  
  logoHeading: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 40,
    paddingHorizontal: 40,
    textAlign: 'center'
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
  button: {
    backgroundColor: '#1a635f',
    paddingVertical: 10,
    borderRadius: 10
  },
  buttonTitle: {
    color: '#fff',
    textAlign: 'center'
  }
});
