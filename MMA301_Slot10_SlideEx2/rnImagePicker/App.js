
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';


export default function App() {
  const [resourcePath, setResourcePath] = useState({});

  const selectFile = () => {
    var options = {
      title: 'Select Image',
      customButton: [
        {
          name: 'customOptionKey',
          title: 'Choose file from Custom Option'
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, res => {
      console.log('Response= ' + res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (res.error) {
        console.log('Image picker error: ' + res.error);
      }
      else if (res.customButton) {
        console.log('User tapped custom button: ' + res.customButton);
        alert(res.customButton);
      } else {
        let source = res;
        setResourcePath(source);
      }

    })
  }


  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'data:image/jpeg;base64' + resourcePath.data,
          }}
          style={{
            width: 100,
            height: 100
          }} />

        <Image
          source={{
            uri: resourcePath.uri,
          }}
          style={{
            width: 200,
            height: 200
          }} />
        <Text style={{
          alignItems: 'center'
        }}
        >{resourcePath.uri}</Text>
        <TouchableOpacity onPress={selectFile} style={styles.button}>
          <Text style={styles.buttonText}>Select File</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 250,
    height: 60,
    backgroundColor: '#3740ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginBottom: 12
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: 'white'
  }
});



