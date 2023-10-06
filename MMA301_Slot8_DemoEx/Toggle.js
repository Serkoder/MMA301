import { View } from "react-native";
import { Button } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";

export default function Toggle({ label, options, value, onChange }) {
	return <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.optionsContainer}>
            {options.map((option) => (
                <Button 
                    color={option === value ? '#3B6CD4' : '#AAA'}
                    onPress={() => onChange(option)}
                    title={option}
                    key={option}
                /> 
            ))}
        </View>
    </View>;
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "column",
		paddingBottom: 12,
		paddingTop: 50,
	},
	label: {
		fontSize: 14,
		padding: 4,
	},
	optionsContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
	},
});


