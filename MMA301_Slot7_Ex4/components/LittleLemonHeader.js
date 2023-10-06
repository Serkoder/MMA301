import { StyleSheet, View, Text } from 'react-native';

const style = StyleSheet.create({
    header: {
      backgroundColor: '#EE9972'
    },
    headerTitle: {
      padding: 30,
      fontSize: 30,
      color: 'black',
      textAlign: 'center',
    }
})

export default function LittleLemonHeader() {
  return (
    <View style={style.header}>
      <Text
        style={style.headerTitle}>
        Little Lemon
      </Text>
    </View>
  );
}
