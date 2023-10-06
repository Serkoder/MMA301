import { FlatList, Text, View, StyleSheet } from "react-native"

const menuItemsToDisplay = [
    { name: 'Hummus', price: '$5.00', id: '1A' },
    { name: 'Moutabal', price: '$5.00', id: '2B' },
    { name: 'Falafel', price: '$7.50', id: '3C' },
    { name: 'Marinated Olives', price: '$5.00', id: '4D' },
    { name: 'Kofta', price: '$5.00', id: '5E' },
    { name: 'Eggplant Salad', price: '$8.50', id: '6F' },
    { name: 'Lentil Burger', price: '$10.00', id: '7G' },
    { name: 'Smoked Salmon', price: '$14.00', id: '8H' },
    { name: 'Kofta Burger', price: '$11.00', id: '9I' },
    { name: 'Turkish Kebab', price: '$15.50', id: '10J' },
    { name: 'Fries', price: '$3.00', id: '11K' },
    { name: 'Buttered Rice', price: '$3.00', id: '12L' },
    { name: 'Bread Sticks', price: '$3.00', id: '13M' },
    { name: 'Pita Pocket', price: '$3.00', id: '14N' },
    { name: 'Lentil Soup', price: '$3.75', id: '15O' },
    { name: 'Greek Salad', price: '$6.00', id: '16Q' },
    { name: 'Rice Pilaf', price: '$4.00', id: '17R' },
    { name: 'Baklava', price: '$3.00', id: '18S' },
    { name: 'Tartufo', price: '$3.00', id: '19T' },
    { name: 'Tiramisu', price: '$5.00', id: '20U' },
    { name: 'Panna Cotta', price: '$5.00', id: '21V' },
]


export default function MenuItem() {
    return <FlatList
        data={menuItemsToDisplay}
        renderItem={({ item }) => <View style={styles.rowContainer}>
            <Text style={styles.leftSide}>{item.name}</Text>
            <Text style={styles.rightSide}>{item.price}</Text>
        </View>}
        keyExtractor={(item) => item.id}
    >
    </FlatList>
}

const styles = StyleSheet.create({
    rowContainer: {
      flexDirection: 'row', // Arrange children in a row
      justifyContent: 'space-between', // Put space between children
      alignItems: 'center', // Center vertically within the row
      paddingHorizontal: 16, // Add padding to the row container
      backgroundColor: '#fff', // Background color (adjust as needed)
      height: 60, // Set the desired height
    },
    leftSide: {
      flex: 1, // Takes up 30% of the row width
      // You can add additional styles for the left side here
    },
    rightSide: {
      flex: 1, 
      textAlign: "right" // Takes up 70% of the row width
      // You can add additional styles for the right side here
    },
  });
  