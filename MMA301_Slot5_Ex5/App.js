import * as React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import WelcomeScreen from "./WelcomeScreen";

import menuItems from "./data"

const MenuItem = ({ item }) => {
	return (
		<View style={{
      backgroundColor: 'black',
      flexDirection: 'row',
      padding: 20
    }}>
			<Text style={{
        color: "#F4CE14",
        flex: 1,
        fontSize: 20
      }}>{item.name}</Text>
      <Text style={{
        color: "#F4CE14",
        fontSize: 20
      }}>{item.price}</Text>
		</View>
	);
};

export default function App() {
	return (
		<>
			<View style={styles.container}>
				<LittleLemonHeader />
        <FlatList 
          data={menuItems}
          renderItem={({item}) => <MenuItem item={item}/>}
          keyExtractor={(item) => item.id}
        />
			</View>
			<View style={styles.footerContainer}>
				<LittleLemonFooter />
			</View>
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
