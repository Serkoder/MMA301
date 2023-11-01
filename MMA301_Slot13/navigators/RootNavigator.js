import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SubscribeScreen from "../screens/SubscribeScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = ({ children }) => {
  return (
    <Stack.Navigator>
      {/* Set up stack navigation to move between welcome screen and subscribe screen here */}
      <Stack.Screen name="welcome" component={WelcomeScreen} options={{
        title: 'Welcome',
        headerTitleAlign: 'center'
      }}/>
      <Stack.Screen name="subscribe" component={SubscribeScreen} options={{
        title: 'Subscribe',
        headerTitleAlign: 'center'
      }} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
