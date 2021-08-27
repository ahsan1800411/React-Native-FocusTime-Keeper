import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ProgressBar } from "react-native-paper";
import Countdown from "../../component/Countdown";
import RoundedButton from "../../component/RoundedButton";
import { spacing } from "../../util/sizes";
import { colors } from "./../../util/colors";
import Timing from "./Timing";

export default function Timer({ focusSubject }) {
  const [progress, setProgress] = useState(1);
  const [isStarted, setIsStarted] = useState(false);
  const [minutes, setMinutes] = useState(0.1);

  const onProgress = (progress) => {
    setProgress(progress);
  };

  const changeTime = (min) => {
    setMinutes(min);
    setProgress(1);
    setIsStarted(false);
  };

  return (
    <View style={styles.container}>
      <View stle={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={onProgress}
        />
      </View>
      <View style={{ paddingTop: spacing["xxl"] }}>
        <Text style={styles.title}>Focuing on:</Text>
        <Text style={styles.task}>{focusSubject} </Text>
      </View>
      <View style={{ paddingTop: spacing["sm"] }}>
        <ProgressBar
          progress={progress}
          color='#5E84E2'
          style={{ height: 10 }}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Timing onChangeTime={changeTime} />
      </View>
      <View style={styles.buttonWrapper}>
        {isStarted ? (
          <RoundedButton title='Pause' onPress={() => setIsStarted(false)} />
        ) : (
          <RoundedButton title='Start' onPress={() => setIsStarted(true)} />
        )}
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
  countdown: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: "row",
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
