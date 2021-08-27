import React, { useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import Focus from "./src/features/focus/Focus";
import Timer from "./src/features/timer/Timer";
import { colors } from "./src/util/colors";
import { spacing } from "./src/util/sizes";

export default function App() {
  const [focusSubject, setFocusSubject] = useState("gardening");
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer focusSubject={focusSubject} />
      ) : (
        <Focus addSubject={setFocusSubject} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? spacing["lg"] : spacing["lg"],
    flex: 1,
    backgroundColor: colors["darkBlue"],
  },
});
