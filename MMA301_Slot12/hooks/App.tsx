/* eslint-disable react/react-in-jsx-scope */
import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  useWindowDimensions,
} from 'react-native';

function App() {
  const colorScheme = useColorScheme();
  const {width, height, scale, fontScale} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Text>useColorScheme(): {colorScheme}</Text>
      <Text>Height: {height}</Text>
      <Text>Width: {width}</Text>
      <Text>Scale: {scale}</Text>
      <Text>FontScale: {fontScale}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
