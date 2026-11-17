import { Pressable, StyleSheet, Text, View } from "react-native";
import Svg, { Path, Circle } from "react-native-svg";

export default function ExchangeHeader() {
  return (
    <View style={styles.container}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Go back"
        style={styles.iconButton}
        onPress={() => {}}
      >
        <Text style={styles.backArrow}>‹</Text>
      </Pressable>

      <Text style={styles.title}>Exchange</Text>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Notifications"
        style={styles.iconButton}
        onPress={() => {}}
      >
        <Svg width={27} height={27} viewBox="0 0 24 24">
          <Path
            d="M19 11V12.76C19 13.55 19.32 14.31 19.88 14.88L20.48 15.48C20.81 15.81 21 16.26 21 16.73C21 17.71 20.21 18.5 19.23 18.5H4.77C3.79 18.5 3 17.71 3 16.73C3 16.26 3.19 15.81 3.52 15.48L4.12 14.88C4.68 14.31 5 13.55 5 12.76V10C5 6.13 8.13 3 12 3"
            fill="#B99ACF"
            stroke="#B99ACF"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M15.5 18.5C15.5 20.43 13.93 22 12 22C10.07 22 8.5 20.43 8.5 18.5"
            fill="#B99ACF"
            stroke="#B99ACF"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Circle cx="18" cy="5" r="3" fill="#B99ACF" />
        </Svg>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 58,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 22,
  },
  iconButton: {
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  backArrow: {
    color: "#E5DCEC",
    fontSize: 38,
    fontWeight: "300",
    lineHeight: 42,
  },
  title: {
    position: "absolute",
    left: 44,
    right: 44,
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "500",
  },
});
