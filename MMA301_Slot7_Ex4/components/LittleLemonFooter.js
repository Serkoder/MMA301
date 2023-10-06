import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const style = StyleSheet.create({
  footer: {
    backgroundColor: '#EE9972',
    marginBottom: 10
  },
  footerTitle: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  }
})


export default function LittleLemonFooter() {
  return (
    <View
      style={style.footer}>
      <Text
        style={style.footerTitle}>
        All rights reserved by Little Lemon, 2022{' '}
      </Text>
    </View>
  );
}
