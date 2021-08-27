import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { fontSizes, spacing } from "../util/sizes";
import { colors } from "./../util/colors";

const minutesToMilliSeconds = (min) => min * 1000 * 60;
const formatTime = (time) => (time < 10 ? `0${time}` : time);

export default function Countdown({ minutes = 20, isPaused }) {
  const [millis, setMillis] = useState(minutesToMilliSeconds(minutes));
  const minute = Math.floor(millis / 100 / 60) % 60;
  const seconds = Math.floor(millis / 100) % 60;
  return (
    <Text style={styles.text}>
      {formatTime(minute)} {formatTime(seconds)}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes["xxxl"],
    fontWeight: "bold",
    color: colors.white,
    padding: spacing["lg"],
    backgroundColor: "rgba(94,132,226,0.3)",
  },
});
