import React from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import RoundedButton from "../../component/RoundedButton";
import { colors } from "../../util/colors";
import { fontSizes, spacing } from "./../../util/sizes";

const HistoryItem = ({ item, index }) => {
  return <Text style={styles.historyItem(item.status)}>{item.subject}</Text>;
};

export default function FocusHistory({ focusHistroy, onClear }) {
  const clearHistory = () => {
    onClear();
  };
  return (
    <>
      <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
        {!!focusHistroy.length && (
          <>
            <Text style={styles.title}>Things We've Focused on</Text>

            <FlatList
              style={{ flex: 1 }}
              containerContentStyle={{ flex: 1, alignItems: "center" }}
              data={focusHistroy}
              renderItem={HistoryItem}
            />
            <View style={styles.clearContainer}>
              <RoundedButton
                size={75}
                title='Clear'
                onPress={() => onClear()}
              />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  historyItem: (item) => ({
    color: status > 1 ? "red" : "green",
    fontSize: fontSizes.md,
  }),
  title: {
    color: colors["white"],
    fontSize: fontSizes["lg"],
  },
  clearContainer: {
    alignItems: "center",
    padding: spacing["md"],
  },
});
