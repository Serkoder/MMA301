import { ScrollView, Text, StyleSheet, TextInput } from 'react-native';

export default function LoginScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.headerText}>Welcome to Little Lemon</Text>
            <Text style={styles.regularText}>Login to continue </Text>
            <TextInput placeholder='email'
                style={{
                    backgroundColor: "#FFFFFF",
                    padding: 10,
                    fontSize: 15,
                    margin: 8,
                }}></TextInput>
            <TextInput placeholder='password'
                secureTextEntry={true}
                style={{
                    backgroundColor: "#FFFFFF",
                    padding: 10,
                    fontSize: 15,
                    margin: 8,
                }}></TextInput>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerText: {
        padding: 40,
        fontSize: 30,
        color: '#EDEFEE',

        textAlign: 'center',
    },
    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
    },
});
