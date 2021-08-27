import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import RoundedButton from "../../component/RoundedButton";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What Would you like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput style={{ flex: 1, marginRight: 20 }} />
          <RoundedButton size={50} title='+' />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    padding: 16,
    flex: 0.5,
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
  },
  inputContainer: {
    paddingTop: 20,
    flexDirection: "row",
  },
});
