import { useState, useMemo } from "react";
import {
  Image,
  Pressable,
  Text,
  View,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";

import { validateEmail } from "../utils/index";

const SubscribeScreen = () => {
  const [email, setEmail] = useState("");
  const isValidEmail = useMemo(() => validateEmail(email), [email]);

  // Add subscribe screen code here
  const createSuccessAlert = () =>
    Alert.alert("", "Thanks for subscribing, stay tuned!", [{
      text: "OK",
      onPress: () => console.log("OK Pressed"),
      style: "ok",
    }]);

  return (
    <View style={style.container}>
      <View style={style.logoContainer}>
        <Image
          style={style.image}
          source={require("../assets/little-lemon-logo-grey.png")}
        />
        <Text style={style.logoHeading}>
          Subcribe to our newsletter for our latest delicious recipes!
        </Text>
      </View>
      <TextInput
        style={style.input}
        value={email}
        onChangeText={setEmail}
        placeholder="email@email.com"
        keyboardType="email-address"
      />
      <Pressable
        disabled={!isValidEmail}
        style={(pressed) => [
          {
            backgroundColor: pressed ? "#278c87" : "#1a635f",
          },
          style.button,
          {
            backgroundColor: !isValidEmail ? "gray" : "#1a635f",
          },
        ]}
        onPress={createSuccessAlert}
      >
        <Text style={style.buttonTitle}>Subscribe</Text>
      </Pressable>
    </View>
  );
};

export default SubscribeScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    flexDirection: "column",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoHeading: {
    fontSize: 20,
    marginTop: 40,
    paddingHorizontal: 40,
    textAlign: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  button: {
    backgroundColor: "#1a635f",
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonTitle: {
    color: "#fff",
    textAlign: "center",
  },
  input: {
    height: 40,
    marginVertical: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});
