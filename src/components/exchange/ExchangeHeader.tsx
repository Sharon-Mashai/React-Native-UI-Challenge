import { Pressable, StyleSheet, Text, View } from "react-native";

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
        <Text style={styles.bell}>♧</Text>
        <View style={styles.notificationDot} />
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
  bell: {
    color: "#B99ACF",
    fontSize: 25,
  },
  notificationDot: {
    position: "absolute",
    top: 9,
    right: 10,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#E58CB9",
  },
});
