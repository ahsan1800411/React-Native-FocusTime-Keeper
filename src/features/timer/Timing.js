import React from "react";
import { StyleSheet, View } from "react-native";
import RoundedButton from "../../component/RoundedButton";

export default function Timing({ onChangeTime }) {
  return (
    <>
      <View styles={styles.timingButton}>
        <RoundedButton size={75} title='10' onPress={() => onChangeTime(10)} />
      </View>
      <View styles={styles.timingButton}>
        <RoundedButton size={75} title='15' onPress={() => onChangeTime(15)} />
      </View>
      <View styles={styles.timingButton}>
        <RoundedButton size={75} title='20' onPress={() => onChangeTime(20)} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: "center",
  },
});
