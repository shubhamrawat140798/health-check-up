import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/Entypo";

const LocationHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.container}>
        <Icon
          name="location-pin"
          size={20}
          color="#FFA500"
          style={styles.icon}
        />
        <Text style={styles.text}>Delhi - NCR</Text>
        <Icon
          name="chevron-down"
          size={20}
          color="#000"
          style={styles.chevron}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
  },
  icon: {
    marginRight: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  chevron: {
    marginLeft: 5,
  },
});

export default LocationHeader;
