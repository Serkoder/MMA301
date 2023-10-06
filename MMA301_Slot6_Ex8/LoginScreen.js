import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, Pressable } from 'react-native';



export default function LoginScreen() {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false)
  const handleLogin = () => {
    if (email == 'test@meta.com' && password == '123456') {
      setLoggedIn(true)
    }
  }
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      {
        loggedIn ? (
          <Text style={styles.headerText}>Logged in</Text>
        ) : (
          <>
            <Text style={styles.regularText}>Login to continue </Text>
            <TextInput
              style={styles.inputBox}
              value={email}
              onChangeText={onChangeEmail}
              placeholder={'email'}
              keyboardType={'email-address'}
            />
            <TextInput
              style={styles.inputBox}
              value={password}
              onChangeText={onChangePassword}
              placeholder={'password'}
              keyboardType={'default'}
              secureTextEntry={true}
            />
            <Pressable
              style={({ pressed }) => [
                styles.button,
                { backgroundColor: pressed ? '#b9775a' : '#ec9973' }, // Change color when pressed
              ]}
              onPress={handleLogin}
            >
              <Text style={styles.buttonText}>Login</Text>
            </Pressable>
          </>
        )
      }

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
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    // borderColor: 'EDEFEE',
    backgroundColor: '#EDEFEE',
  },
  button: {
    backgroundColor: '#ec9973',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 12,
    width: 150,
    borderRadius: 5,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});
