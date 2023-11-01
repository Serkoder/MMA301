import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import Data from './Data.json';



export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {Data.map(item => {
          return <View style={{ width: '100%', height: '100vh', marginTop: 50, }}>
            <View
            style={{borderWidth: 1,
              borderColor: "black",
              borderRadius: 0,}}>
           
            <View>
              <Text>Id: {item.id}</Text>
            </View>
            <View>
              <Text>Department:{item.department}</Text>
            </View>
            <View>
              <Text>Name: {item.name}</Text>
            </View>
            <View>
              <Text>Position: {item.position}</Text>
            </View>
            <View>
              <Text>Salary: {item.salary}</Text>
            </View>
            </View>
          </View>
        })}
      </ScrollView>

    </View>

  );
}

