import { View, Text } from 'react-native';

function LittleLemonFooter() {
    return (
        <View style={{ flex: 0.15, backgroundColor: '#a8d5ff' }}>
          <Text
            style={{
              padding: 20,
              fontSize: 20,
              color: 'black',
              textAlign: 'center',
            }}>
            All rights reserved by Little Lemon, 2022
          </Text>
        </View>
      );
}

export default LittleLemonFooter;