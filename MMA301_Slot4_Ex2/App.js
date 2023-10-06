import * as React from "react";
import { Text, View } from "react-native";

import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
export default function App() {
	return (
		<>
			<View
				style={{
					flex: 1,
					backgroundColor: "#495E57",
				}}
			>
				<LittleLemonHeader />
				<Text
					style={{
						color: "#fff",
						marginVertical: 20,
						fontSize: 40,
						textAlign: "center",
					}}
				>
					Welcome to Little Lemon
				</Text>
				<Text
					style={{
						color: "#fff",
						fontSize: 25,
						textAlign: "center",
					}}
				>
					Little Lemon is a charming neighborhood bistro that serves
					simple food and classic cocktails in a lively but casual
					environment. We would love to hear more about your
					experience with us!{" "}
				</Text>
			</View>
			<View style={{ backgroundColor: "#495E57" }}>
				<LittleLemonFooter />
			</View>
		</>
	);
}
