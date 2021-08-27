import React, { useState, useEffect } from "react";
import { Platform, StyleSheet, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Focus from "./src/features/focus/Focus";
import Timer from "./src/features/timer/Timer";
import { colors } from "./src/util/colors";
import { spacing } from "./src/util/sizes";
import FocusHistory from "./src/features/focus/FocusHistory";

const STATUSES = {
  COMPLETE: 1,
  CANCELED: 2,
};
export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistroy, setFocusHistroy] = useState([]);

  const addFocusHistroySubjectWithState = (subject, status) => {
    setFocusHistroy([...focusHistroy, { subject, status }]);
  };

  const onClear = () => {
    setFocusHistroy([]);
  };

  const safeFocusHistroy = async () => {
    try {
      AsyncStorage.setItem("focusHistory", JSON.stringify(focusHistroy));
    } catch (error) {
      console.log(error);
    }
  };

  const loadFocusHistory = async () => {
    try {
      const history = await AsyncStorage.getItem("focusHistory");
      if (history && JSON.parse(history).length) {
        setFocusHistroy(JSON.parse(history));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadFocusHistory();
  }, []);

  useEffect(() => {
    safeFocusHistroy();
  }, [focusHistroy]);

  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer
          focusSubject={focusSubject}
          onTimerEnd={() => {
            addFocusHistroySubjectWithState(focusSubject, STATUSES["COMPLETE"]);
            setFocusSubject(null);
          }}
          clearSubject={() => {
            addFocusHistroySubjectWithState(focusSubject, STATUSES["CANCELED"]);
            setFocusSubject(null);
          }}
        />
      ) : (
        <>
          <Focus addSubject={setFocusSubject} />
          <FocusHistory focusHistroy={focusHistroy} onClear={onClear} />
        </>
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
