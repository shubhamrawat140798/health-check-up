import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Fontisto } from "@expo/vector-icons";
export default function SearchBar() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for tests or checkups"
        placeholderTextColor="#999"
      />
      <TouchableOpacity style={styles.iconContainer}>
        <Fontisto name="search" size={24} color="#999" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#FFA726", // your border color
    borderRadius: 20, // adjust as needed
    backgroundColor: "white",
    paddingHorizontal: 10,
    // paddingVertical: 5,
    // marginHorizontal: 10,
    // marginVertical: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    height: 50,
  },
  iconContainer: {
    marginLeft: 10,
  },
});
