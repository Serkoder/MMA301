import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import New from './common_components/New';
import ComponentAndroid from './common_components/ComponentAndroid';

export default function App() {
  return (
    <View style={styles.container}>
      {Platform.select({
        ios: () => <ComponentIOS/>,
        android: () => <ComponentAndroid/>
      })()
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        backgroundColor:'#91c1ff',
      },
      android:{
        backgroundColor: '#f9ffd6',

      },
      default: {
        backgroundColor: 'yellow'
      }
    })
  },
});
