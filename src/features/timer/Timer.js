import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Countdown from "../../component/Countdown";
import { spacing } from "../../util/sizes";
import { colors } from "./../../util/colors";

export default function Timer({ focusSubject }) {
  return (
    <View style={styles.container}>
      <Countdown />
      <View style={{ paddingTop: spacing["xxl"] }}>
        <Text style={styles.title}>Focuing on:</Text>
        <Text style={styles.task}>{focusSubject} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: colors.white,
    textAlign: "center",
  },
  task: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
  },
});
