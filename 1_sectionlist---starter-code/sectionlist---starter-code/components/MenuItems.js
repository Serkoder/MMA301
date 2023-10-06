import React from "react";
import { View, Text, StyleSheet, SectionList } from "react-native";

const menuItemsToDisplay = [
  {
    title: "Appetizers",
    data: [
      { name: "Hummus", price: "$5.00",id: '1K' },
      { name: "Moutabal", price: "$5.00", id: '2K' },
      { name: "Falafel", price: "$7.50", id: '3K' },
      { name: "Marinated Olives", price: "$5.00", id: '4K' },
      { name: "Kofta", price: "$5.00", id: '5K' },
      { name: "Eggplant Salad", price: "$8.50", id: '6K' },
    ],
  },
  {
    title: "Main Dishes",
    data: [
      { name: "Lentil Burger", price: "$10.00", id: '7K' },
      { name: "Smoked Salmon", price: "$14.00", id: '8K' },
      { name: "Kofta Burger", price: "$11.00", id: '9K' },
      { name: "Turkish Kebab", price: "$15.50", id: '10K' },
    ],
  },
  {
    title: "Sides",
    data: [
      { name: "Fries", price: "$3.00", id: '11K' },
      { name: "Buttered Rice", price: "$3.00", id: '12K' },
      { name: "Bread Sticks", price: "$3.00", id: '13K' },
      { name: "Pita Pocket", price: "$3.00", id: '14K' },
      { name: "Lentil Soup", price: "$3.75", id: '15K' },
      { name: "Greek Salad", price: "$6.00", id: '16K' },
      { name: "Rice Pilaf", price: "$4.00", id: '17K' },
    ],
  },
  {
    title: "Desserts",
    data: [
      { name: "Baklava", price: "$3.00", id: '18K' },
      { name: "Tartufo", price: "$3.00", id: '19K' },
      { name: "Tiramisu", price: "$5.00", id: '20K' },
      { name: "Panna Cotta", price: "$5.00", id: '21K' },
    ],
  },
];

const MenuItems = () => {
  return (
    <SectionList
      style={menuStyles.container}
      sections={menuItemsToDisplay}
      renderItem={({ item }) => (
        <View style={menuStyles.innerContainer}>
          <Text style={menuStyles.itemText}>{item.name}</Text>
          <Text style={menuStyles.itemText}>{item.price}</Text>
        </View>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <View style={menuStyles.sectionHeaderContainer}>
          <Text style={menuStyles.sectionHeader}>{title}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sectionHeaderContainer: {
    backgroundColor: "#F4CE14",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
  },
  sectionHeader: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
  },
  itemText: {
    color: "yellow",
    fontSize: 20,
  },
});

export default MenuItems;