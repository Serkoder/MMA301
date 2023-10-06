import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import WelcomeScreen from "./WelcomeScreen";
import LoginScreen from "./LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<>
			<NavigationContainer>
				<View style={styles.container}>
					<LittleLemonHeader />
					<Stack.Navigator initialRouteName="Login">
						<Stack.Screen
							name="Login"
							component={LoginScreen}
							options={{
								headerTitleAlign: 'center'
							}}
						/>
						<Stack.Screen
							name="Welcome"
							component={WelcomeScreen}
							options={{
								headerTitleAlign: 'center'
							}}
						/>
					</Stack.Navigator>
				</View>
				<View style={styles.footerContainer}>
					<LittleLemonFooter />
				</View>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#333333",
	},
	footerContainer: { backgroundColor: "#333333" },
});
