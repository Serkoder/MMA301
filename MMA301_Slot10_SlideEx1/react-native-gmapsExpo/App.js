import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker}  from 'react-native-maps';

export default function App() {
  let location = {
    latitude: 16.047199,
    longgitude: 108.219955,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009
  }
  return (
    <View style={styles.container}>
        <MapView
        style={StyleSheet.absoluteFillObject}
        provider={PROVIDER_GOOGLE}
        mapType='hybrid'
        region={location}>
          <Marker coordinate={{latitude: 16.047199, longitude: 108.219955}}>
          <StyledMarker/>
          </Marker>
        </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const StyledMarker = () =>(
  <View style={{
    width:60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#d8f0e8",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
    }}>
      <Text style={{color: "black"}}>Danang</Text>
    </View>
);